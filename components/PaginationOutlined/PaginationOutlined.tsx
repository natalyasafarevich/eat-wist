import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useSelector} from 'react-redux';
import {RootState} from '@/store/store';
import {FC, useEffect, useState} from 'react';
type PaginationOutlinedProps = {
  getPage: (a: number) => void;
  isUpdate: boolean;
};
const PaginationOutlined: FC<PaginationOutlinedProps> = ({
  getPage,
  isUpdate,
}) => {
  const state = useSelector((state: RootState) => state.products.data);
  const country = useSelector((state: RootState) => state.country);

  const [currentPage, setCurrentPage] = useState<number>(1);
  useEffect(() => {
    isUpdate && setCurrentPage(1);
    console.log(country);
  }, [country]);

  const [pageSize, setPageSize] = useState<number>(1);

  useEffect(() => {
    setPageSize(Math.ceil(state.count / state.page_size));
  }, [state]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    getPage(value);
    setCurrentPage(value);
    console.log(isUpdate);
  };

  return (
    <Stack spacing={10}>
      <Pagination
        count={pageSize}
        page={currentPage}
        onChange={handleChange}
        variant='outlined'
      />
    </Stack>
  );
};

export default PaginationOutlined;
