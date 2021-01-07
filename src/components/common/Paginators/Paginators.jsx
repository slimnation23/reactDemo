import React from 'react'
import s from './Paginators.module.css'

let Paginators = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
            <ul>
                {pages.map((p) => {
                    return (
                        <li
                            className={
                                props.currentPage === p && s.selectedPage
                            }
                            onClick={(e) => {
                                props.onPageChanged(p)
                            }}
                        >
                            {p}
                        </li>
                    )
                })}
            </ul>
    )
}

export default Paginators
