import { Badge, IconButton } from '@mui/material'
import React, { useContext } from 'react'
import { ShopCartContext } from '../context/ShopCartContext'
import { SearchBar } from '../search-bar/SearchBar'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './header.scss'

type HeaderProps = {
  toggleShowPopover: () => void
}

export const Header = ({ toggleShowPopover }: HeaderProps) => {

  const total = useContext(ShopCartContext).purchaseList;

  return (
    <header
      className="header-container"
    >
      <img src="https://web.talana.com/hubfs/talana-logo.svg" alt=""  />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <SearchBar />
        <IconButton onClick={toggleShowPopover}>
          <Badge badgeContent={total.length} color="secondary">
            <ShoppingBagIcon
            color='primary'
            />
          </Badge>
        </IconButton>

      </div>
    </header>
  )
}
