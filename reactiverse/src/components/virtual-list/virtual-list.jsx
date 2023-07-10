import { loremIpsum } from "lorem-ipsum";
import { useState, useEffect } from "react";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  ScrollSync,
  Grid,
  Collection,
} from "react-virtualized";
import "./virtual-list.scss";

const columnCount = 100;
const rowCount = 500;
const columnWidth = 400;
const listHeight = 500;
const rowHeight = 50;
const cellCount = 5000;
const cellWidth = 400;
const cellHeight = 50;
const rowWidth = 500;
const cache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 100,
});

console.log(cache);

const list = Array(rowCount)
  .fill()
  .map((val, idx) => {
    return {
      id: idx,
      name: "John Doe",
      image: "http://via.placeholder.com/40",
      text: loremIpsum({
        count: 1,
        units: "sentences",
        sentenceLowerBound: 4,
        sentenceUpperBound: 8,
      }),
    };
  });

const grid = Array(rowCount).fill().map((val, idx) => (
  Array(columnCount).fill().map((val, idx) => ({
    id: idx,
    name: 'John Doe',
    image: 'http://via.placeholder.com/40',
    text: loremIpsum({
      count: 4,
      units: 'word'
    })
  }))
));


function Collapsible({ children, title, onChange }) {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    onChange && onChange();
  }, [expanded, onChange]);
  return (
    <>
      <div className="accordHeader" onClick={() => setExpanded(!expanded)}>
        {title}
      </div>
      {expanded && <>{children}</>}
    </>
  );
}

function renderRow({ index, key, style, parent }) {
  return (
    <CellMeasurer
      key={key}
      cache={cache}
      parent={parent}
      columnIndex={0}
      rowIndex={index}
    >
      {({ registerChild, measure }) => (
        <div style={style} className="row" ref={registerChild}>
          <Collapsible title={list[index].name} onChange={measure}>
            <div className="image">
              <img src={list[index].image} alt="" />
            </div>
            <div className="content">
              <div>{list[index].name}</div>
              <div>{list[index].text}</div>
            </div>
          </Collapsible>
        </div>
      )}
    </CellMeasurer>
  );
}

function renderCellCollection({ index, key, style }) {
  return (
    <div key={key} style={style} className="row">
      <div className="image">
        <img src={list[index].image} alt="" />
      </div>
      <div className="content">
        <div>{list[index].name}</div>
        <div>{list[index].text}</div>
      </div>
    </div>
  );
}

function renderCell({ columnIndex, key, rowIndex, style }) {
  return (
    <div key={key} style={style} className="row">
      <div className="image">
        <img src={grid[rowIndex][columnIndex].image} alt="" />
      </div>
      <div className="content">
        <div>{grid[rowIndex][columnIndex].name}</div>
        <div>{grid[rowIndex][columnIndex].text}</div>
      </div>
    </div>
  );
}

function cellSizeAndPositionGetter({ index }) {
  return {
    height: cellHeight,
    width: cellWidth,
    y: index * cellHeight,
    x: Math.floor(Math.random() * 10) * cellWidth
  }
}

function VirtualList() {
  return (
    <>
      <div className="virtual-list-container">
        <div className="VirtualList">
          <ScrollSync>
            {({ onScroll, scrollTop, scrollLeft }) => (
              <div className="list">
                <span>Scroll Top - {scrollTop}</span>
                <span>Scroll Left - {scrollLeft}</span>
                <AutoSizer>
                  {({ width, height }) => {
                    return (
                      // <List
                      //   width={width}
                      //   height={height}
                      //   deferredMeasurementCache={cache}
                      //   rowHeight={cache.rowHeight}
                      //   rowRenderer={renderRow}
                      //   onScroll={onScroll}
                      //   rowCount={list.length}
                      //   overscanRowCount={3}
                      // />
                      // <Grid
                      //   width={width}
                      //   height={height}
                      //   rowHeight={rowHeight}
                      //   columnWidth={columnWidth}
                      //   cellRenderer={renderCell}
                      //   onScroll={onScroll}
                      //   rowCount={grid.length}
                      //   columnCount={grid[0].length}/>
                    // );
                    <Collection
                      width={width}
                      height={height}
                      cellRenderer={renderCellCollection}
                      cellCount={list.length}
                      cellSizeAndPositionGetter={cellSizeAndPositionGetter}/>
                    )
                  }}
                </AutoSizer>
              </div>
            )}
          </ScrollSync>
        </div>
      </div>
    </>
  );
}

export default VirtualList;
