import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Pagination } from "@mui/material";
import { getPagesCount } from "helpers/pagination";
import {
  EPaginationStateKeys,
  changePage,
  changePageSize,
} from "store/reducers/pagination";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import Style from "./Pagination.style";

type Props = {
  totalDocs: number;
  pageName: EPaginationStateKeys;
};

const pageSizes = [
  {
    label: "10",
    value: 10,
  },
  {
    label: "20",
    value: 20,
  },
  {
    label: "50",
    value: 50,
  },
  {
    label: "100",
    value: 100,
  },
];

function CustomPagination({ totalDocs, pageName }: Props) {
  const pagination = useAppSelector((state) => state.pagination);
  const dispatch = useAppDispatch();

  const pageSize = pagination[pageName].pageSize;
  const currentPage = pagination[pageName].currentPage;

  const onPageChange = (_: unknown, page: number) => {
    dispatch(changePage({ key: pageName, value: page }));
  };

  const onPageSizeChange = (e: SelectChangeEvent) => {
    dispatch(changePageSize({ key: pageName, value: +e.target.value }));
  };
  return (
    <Style>
      <Pagination
        count={getPagesCount(totalDocs, pageSize)}
        page={currentPage}
        onChange={onPageChange}
      />
      <Select id="mui-select" value={pageSize + ""} onChange={onPageSizeChange}>
        {pageSizes.map((size) => (
          <MenuItem key={size.value} value={size.value}>
            {size.label}
          </MenuItem>
        ))}
      </Select>
    </Style>
  );
}

export default CustomPagination;
