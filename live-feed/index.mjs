const maxFeed = 10;

class LiveFeed {
  feed = Array(maxFeed).fill({ text: "", timestamp: null });
  cursor = 0;

  push(item) {
    this.feed[this.cursor] = item;
    this.cursor += 1;
    if (this.feed.length > maxFeed) this.cursor = 0;
  }
}

