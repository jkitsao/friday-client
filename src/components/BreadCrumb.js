import React from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
function BreadCrumb({ links }) {
  const breadcrumbs = useBreadcrumbs();
  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      {links.map((link) => (
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to={link.path}>
            {link.name}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}

export default BreadCrumb;
