import { useState, React } from 'react'
// track current page 
const [currentPage, setCurrentPage] = useState(1);

// total pages 
const totalPages = Math.ceil(items.length / itemsPerPage)

// determine items to dispaly for current page 
const startIndex = (currentPage -1) * itemsPerPage;
const currentItems = items.slice(startIndex, startIndex + itemsPerPage)

export default function Pagination() {
  return (
    <div>
      
    </div>
  )
}
