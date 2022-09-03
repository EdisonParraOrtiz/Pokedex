import React from 'react'
import './styles/Pagination.css'



const Pagination = ({ pokemons, setPage, page, currentBlock, setCurrentBlock }) => {

    const pageNumbers = []
    const maxPagePerBlock = 10
    const totalPages = Math.ceil(pokemons?.results.length / 10)
    const pageBlock = Math.ceil(totalPages / maxPagePerBlock)

    for (let i = (currentBlock - 1) * maxPagePerBlock; i < currentBlock * maxPagePerBlock; i++) {
        if (i + 1 <= totalPages) {
            pageNumbers.push(i + 1)
        }
    }

    const previewsBlock = () => {
        setCurrentBlock(e => e - 1)
        setPage((currentBlock - 2) * maxPagePerBlock)
    }

    const nextBlock = () => {
        setCurrentBlock(e => e + 1)
        setPage((currentBlock) * maxPagePerBlock)
    }

    return (
        <div className='pagination-container'>
            <ul className='pagination-container__ul'>
                {
                    currentBlock !== 1 && <button className='pagination-container__btn' onClick={previewsBlock}>Back</button>
                }
                {
                    pageNumbers.map(number => (
                        <li key={number}>
                            <a className={page + 1 === number ? 'active-page' : ''} onClick={() => setPage(number - 1)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
                {
                    currentBlock !== pageBlock && <button className='pagination-container__btn' onClick={nextBlock}>Next</button>
                }
            </ul>
        </div>
    )
}

export default Pagination