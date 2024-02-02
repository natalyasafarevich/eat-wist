import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useSelector} from 'react-redux';
import {RootState} from '@/store/store';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import {FC, useEffect, useMemo, useState} from 'react';

type PaginationOutlinedProps = {
  getPage: (a: number) => void;
  isUpdate: boolean;
};

const PaginationOutlined: FC<PaginationOutlinedProps> = ({
  getPage,
  isUpdate,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const state = useSelector((state: RootState) => state.products.data);
  const country = useSelector((state: RootState) => state.country);

  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    isUpdate && setCurrentPage(1);
  }, [country]);

  // const [pageSize, setPageSize] = useState<number>(1);

  const pageSize = useMemo(
    () => Math.max(1, Math.ceil(state.count / state.page_size)),
    [state],
  );
  // useEffect(() => {
  //   setPageSize(Math.max(1, Math.ceil(state.count / state.page_size)));
  // }, [state]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    getPage(value);
    setCurrentPage(value);
    router.push(
      `/search?query=${searchParams
        .get('query')
        ?.toLocaleLowerCase()}&page=${value}`,
    );
  };

  return (
    <Stack spacing={10}>
      <Pagination
        count={pageSize || 1}
        page={currentPage}
        onChange={handleChange}
        variant='outlined'
      />
    </Stack>
  );
};

export default PaginationOutlined;
