import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight, faAnglesRight, faFileCirclePlus, faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import './FileExplorer.css'

const explorerData = [
  {
    id: "1",
    name: "root",
    isFolder: true,
    children: [
      {
        id: "2",
        name: "src",
        isFolder: true,
        children: [
          {
            id: "3",
            name: "components",
            isFolder: true,
            children: [
              {
                id: "4",
                name: "common",
                isFolder: true,
                children: [
                  { id: "5", name: "Button.jsx", isFolder: false },
                  { id: "6", name: "Input.jsx", isFolder: false }
                ]
              },
              { id: "7", name: "Navbar.jsx", isFolder: false },
              { id: "8", name: "Sidebar.jsx", isFolder: false }
            ]
          },
          {
            id: "9",
            name: "hooks",
            isFolder: true,
            children: [
              { id: "10", name: "useAuth.js", isFolder: false },
              { id: "11", name: "useFetch.js", isFolder: false }
            ]
          },
          {
            id: "12",
            name: "utils",
            isFolder: true,
            children: [
              {
                id: "13",
                name: "format",
                isFolder: true,
                children: [
                  { id: "14", name: "date.js", isFolder: false },
                  { id: "15", name: "currency.js", isFolder: false }
                ]
              }
            ]
          },
          { id: "16", name: "App.jsx", isFolder: false },
          { id: "17", name: "index.js", isFolder: false }
        ]
      },
      {
        id: "18",
        name: "public",
        isFolder: true,
        children: [
          { id: "19", name: "index.html", isFolder: false },
          {
            id: "20",
            name: "assets",
            isFolder: true,
            children: [
              { id: "21", name: "logo.png", isFolder: false },
              { id: "22", name: "styles.css", isFolder: false }
            ]
          }
        ]
      },
      {
        id: "23",
        name: "config",
        isFolder: true,
        children: [
          { id: "24", name: "webpack.config.js", isFolder: false },
          { id: "25", name: ".env", isFolder: false }
        ]
      },
      { id: "26", name: "package.json", isFolder: false },
      { id: "27", name: "README.md", isFolder: false }
    ]
  }
];

const RenderExplorer = ({ data = [], isExpanded, setIsExpanded }) => {
  return data.map((item) => (
    <div key={item.id} className='list-item-container'>
      <div className='list-item'>
        <div className='label-container'>
          {item.isFolder && (<span onClick={() => setIsExpanded((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}>{isExpanded[item.id] ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}</span>)}
          {item.isFolder ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className='icons'>
            <g transform="translate(1.41 1.41) scale(2.81)">
              <path fill="rgb(224,173,49)" d="M0 68.798v11.914c0 1.713 1.401 3.114 3.114 3.114 3.344 0 4.805-2.642 4.805-2.642L8.14 29.281l2.739-2.827 72.894-2.977v-1.482c0-2.396-1.942-4.338-4.338-4.338H50.236c-1.15 0-2.254-.457-3.067-1.27l-8.943-8.943c-.813-.813-1.917-1.27-3.067-1.27H4.338C1.942 6.174 0 8.116 0 10.512v7.146v2.332v48.808z" />
              <path fill="rgb(255,200,67)" d="M3.114 83.826c1.713 0 3.114-1.401 3.114-3.114V27.81c0-2.393 1.94-4.333 4.333-4.333h75.107c2.393 0 4.333 1.94 4.333 4.333v51.684c0 2.393-1.94 4.333-4.333 4.333H3.114z" />
            </g>
          </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className='icons'>
            <g transform="translate(1.41 1.41) scale(2.81)">
              <path fill="rgb(233,233,224)" d="M78.42 18.345v68.502c0 1.741-1.412 3.153-3.153 3.153H14.733c-1.741 0-3.153-1.412-3.153-3.153V3.153C11.58 1.412 12.991 0 14.733 0h45.343C63.133 7.61 69.386 13.658 78.42 18.345z" />
              <path fill="rgb(217,215,202)" d="M78.42 18.345H62.948c-1.587 0-2.873-1.286-2.873-2.873V0L78.42 18.345z" />

              <g fill="rgb(184,53,53)">
                <path d="M68.193 33.319H41.808c-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5h26.385c.828 0 1.5.671 1.5 1.5s-.672 1.5-1.5 1.5z" />
                <path d="M34.456 33.319H21.807c-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5h12.649c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5z" />
                <path d="M42.298 20.733H21.807c-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5h20.492c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5z" />
                <path d="M68.193 44.319H21.807c-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5h46.387c.828 0 1.5.671 1.5 1.5s-.672 1.5-1.5 1.5z" />
                <path d="M48.191 55.319H21.807c-.829 0-1.5-.672-1.5-1.5s.671-1.5 1.5-1.5h26.385c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5z" />
                <path d="M68.193 55.319H55.544c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h12.649c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5z" />
                <path d="M68.193 66.319H21.807c-.829 0-1.5-.672-1.5-1.5s.671-1.5 1.5-1.5h46.387c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5z" />
                <path d="M68.193 77.319H55.544c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h12.649c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5z" />
              </g>
            </g>
          </svg>}
          <span className='label'>{item.name}</span>
          {/* {item.isFolder && <>
            <button className='add-icon' onClick={() => handleAddNew(true)}><FontAwesomeIcon icon={faFolderPlus} color='#929292ff' /></button>
            <button className='add-icon' onClick={() => handleAddNew(false)}><FontAwesomeIcon icon={faFileCirclePlus} color='#929292ff' /></button>
          </>} */}
        </div>
        {item.isFolder && item.children && isExpanded[item.id] && <RenderExplorer data={item.children} isExpanded={isExpanded} setIsExpanded={setIsExpanded} />}
      </div>
    </div>
  ))
}

const FileExplorer = () => {
  const [data, setData] = useState(explorerData);
  const [isExpanded, setIsExpanded] = useState({});


  return (
    <div>
      <h2>File Explorer</h2>
      <RenderExplorer data={data} isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
    </div>
  )
}

export default FileExplorer