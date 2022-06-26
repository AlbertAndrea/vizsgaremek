import { ObjectIdTransformPipe } from './object-id-transform.pipe';

describe('ObjectIdTransformPipe', () => {
  it('create an instance', () => {
    const pipe = new ObjectIdTransformPipe();
    expect(pipe).toBeTruthy();
  });
});
