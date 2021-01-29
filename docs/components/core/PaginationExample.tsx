import { Pagination } from "@w-design/core";

const PaginationExample = ({ defaultSelectedIndex }) => {
  return (
    <Pagination
      pages={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      defaultSelectedIndex={defaultSelectedIndex}
      onChange={(page: number) => {
        console.log(page);
      }}
    />
  );
};

export default PaginationExample;
