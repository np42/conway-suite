export class ConwaySuite {

  public getNextSequence(sequence: string) {
    const condensedSequence = sequence.replace(/ /g, '');
    let offset = 0;
    let accumulator = [];
    while (offset < condensedSequence.length) {
      const length = this.getNextChunkLength(condensedSequence, offset);
      accumulator.push(String(length), condensedSequence.charAt(offset));
      offset += length;
    }
    return accumulator.join(' ');
  }

  public getNextNSequence(sequence: string, count: number): string {
    const next = this.getNextSequence(sequence);
    if (count == 1) return next;
    return next + '\n' + this.getNextNSequence(next, count - 1);
  }

  private getNextChunkLength(condensedSequence: string, from: number) {
    const first = condensedSequence.charAt(from);
    for (let i = 1; i < condensedSequence.length; i += 1) {
      if (first !== condensedSequence.charAt(from + i))
        return i;
    }
    return condensedSequence.length - from;
  }

}
