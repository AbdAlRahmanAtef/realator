import { Box, Flex, Select } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  const router = useRouter();

  // const searchProperties = (filterValues) => {
  //   const path = router.pathname;
  //   const { query } = router;
  //   const values = getFilterValues(filterValues);

  //   values.forEach((value) => {
  //     query[value.name] = value.value;
  //   });

  //   router.push({ pathname, path, query });
  // };
  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query: query });
  };
  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      {filters.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            width="fit-content"
            p="2"
            cursor="pointer"
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
