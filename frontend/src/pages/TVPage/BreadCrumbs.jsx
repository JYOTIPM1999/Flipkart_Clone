import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const Breadcrumbs = () => {
  return (
    <Box bg="white">
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500"  />}>
      <BreadcrumbItem >
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">Entertainment</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Television</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    </Box>
  );
};
