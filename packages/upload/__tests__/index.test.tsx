// import React from "react";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("upload", () => {
  test("some test", () => {
    //
  });
});

// it('changes image url', async () => {
//   const { getByTestId } = render(<ImageUploader {...props} />);
//   const inputEl = getByTestId('input-image') as HTMLInputElement;
//   const file = new File(['(⌐□_□)'], 'chucknorris.png', {
//     type: 'image/png',
//   });
//   fireEvent.change(inputEl, { target: { files: [file] } });
//   const newImage = await waitForElement(() =>
//     getByTestId('new-image-wrapper')
//   );
//   expect(
//     newImage.querySelector('.avatar-crop img')!.getAttribute('src')
//   ).toContain('data:image/png;base64');
// });
