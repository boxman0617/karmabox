import AwesomeDebouncePromise from "awesome-debounce-promise";
import { useSDK } from "lib/sdk/context";
import { useAsync } from "react-async-hook";
import useConstant from "use-constant";
import { SVGLoadingSpinner } from "components/svg";
import { rem } from "polished";
import { useEffect } from "react";
import { ErrorMessage, FormElement, FormInput } from "./styles";

export const UniqueLiveUsername = ({ onChange, value, onCheck }) => {
  const { user } = useSDK();

  const debouncedFetchUsernameCheck = useConstant(() =>
    AwesomeDebouncePromise(async (text) => {
      if (text.length >= 3) return user.canClaimUsername(text);
      return { isAvailable: true, karma: 0 };
    }, 1000)
  );
  const search = useAsync(debouncedFetchUsernameCheck, [value]);
  const { isAvailable, karma } = search.result || {
    isAvailable: true,
    karma: 0,
  };

  useEffect(() => {
    onCheck({ isAvailable, karma });
  }, [isAvailable, karma]);

  return (
    <FormElement>
      <label htmlFor="username">Username</label>
      <FormInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Username"
        autoComplete="username"
        isAvailable={isAvailable}
      />
      {search.loading && <SVGLoadingSpinner size={rem(30)} />}
      {!search.loading && !isAvailable && (
        <ErrorMessage>
          Choose a different username, this one is taken.
        </ErrorMessage>
      )}
    </FormElement>
  );
};
