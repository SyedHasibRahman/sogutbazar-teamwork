import { ListItem } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AddIcon from "@mui/icons-material/Add";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AppsIcon from "@mui/icons-material/Apps";
import MessageIcon from "@mui/icons-material/Message";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import GroupIcon from "@mui/icons-material/Group";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import useAuth from "../../../hooks/useAuth";

const SidebarNavigation = () => {
  const { admin } = useAuth();

  return (
    <>
      { admin && (
        <ListItem button>
          <NavLink
            to="add-product"
            className="nav-link text-secondary"
            activeClassName="active"
          >
            <AddIcon sx={ { mr: 2 } } />
            Add Product
          </NavLink>
        </ListItem>
      ) }



      { admin && (
        <ListItem button>
          <NavLink to="manage-product" className="nav-link text-secondary">
            <AppsIcon sx={ { mr: 2 } } />
            Manage Product
          </NavLink>
        </ListItem>
      ) }

      { admin && (
        <ListItem button>
          <NavLink to="make-admin" className="nav-link text-secondary">
            <PersonAddAlt1Icon sx={ { mr: 2 } } />
            Make Admin
          </NavLink>
        </ListItem>
      ) }
      { admin && (
        <ListItem button>
          <NavLink to="manage-banner" className="nav-link text-secondary">
            <SlideshowIcon sx={ { mr: 2 } } />
            Manage Banner
          </NavLink>
        </ListItem>
      ) }
      <ListItem button>
        <NavLink to="my-orders" className="nav-link text-secondary">
          <ShoppingBagIcon sx={ { mr: 2 } } />
          My Orders
        </NavLink>
      </ListItem>
      <ListItem button>
        <NavLink to="review" className="nav-link text-secondary">
          <MessageIcon sx={ { mr: 2 } } />
          Review
        </NavLink>
      </ListItem>
      { admin && (
        <ListItem button>
          <NavLink to="manage-users" className="nav-link text-secondary">
            <GroupIcon sx={ { mr: 2 } } />
            Manage Users
          </NavLink>
        </ListItem>
      ) }
      { admin && (
        <ListItem button>
          <NavLink to="manage-catagory" className="nav-link text-secondary">
            <GroupIcon sx={ { mr: 2 } } />
            Manage Categories
          </NavLink>
        </ListItem>
      ) }
    </>
  );
};

export default SidebarNavigation;
