import React from 'react'

export default function SearchBar({ sorgu, setSorgu, AramaYap }) {
    return (
        <div className="input-group">

            <input className="form-control" type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        Search()
                    }
                }}
                placeholder="Aradığınız filmi giriniz." />
            <input className="btn btn-dark" type="button" value="Ara" onClick={() => Search()} />

        </div>
    )
}
