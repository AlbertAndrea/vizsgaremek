import { ObjectIdTransformPipe } from './objectIdTransform';

describe('ObjectIdTransformPipe', () => {
  it('create an instance', () => {
    const pipe = new ObjectIdTransformPipe();
    expect(pipe).toBeTruthy();
  });
});
