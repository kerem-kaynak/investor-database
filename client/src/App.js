import './App.css';
import { useState, useEffect } from 'react';
import { Table,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell,
} from '@table-library/react-table-library/table';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from "@table-library/react-table-library/baseline";

function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');
  const [checkSize, setCheckSize] = useState(null);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleCheckSize = (event) => {
    setCheckSize(event.target.value)
  };

  const theme = useTheme(getTheme());

  useEffect(() => {
    fetch('https://planet-a-backend-5g3uaqdm7q-ey.a.run.app/api/investors')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);
  return (
    <div className="App">
      <div className="StickyHeader">
        <div className="Title">
          <h1>Investor Database</h1>
        </div>
        <div className="Filters">
          <label htmlFor="search">
            <u>Search by Name or Focus:</u>
            <input className="InputField" id="search" type="text" onChange={handleSearch} />
          </label>
          <label htmlFor="search">
            <u>Search by Check Size:</u>
            <input className="InputField" id="checksize" type="number" onChange={handleCheckSize} />
          </label>
        </div>
      </div>
      <div>
        {data ?
        (
          <Table data={{nodes: data.filter((item) => ((item.name.toLowerCase().includes(search.toLowerCase())) || (item.focus.toLowerCase().includes(search.toLowerCase()))) && (!checkSize || ((parseFloat(item.min_check_size) <= checkSize) && (parseFloat(item.max_check_size) >= checkSize))))}} theme={theme}>
          {
            (tableList) => (
              <>
                <Header>
                  <HeaderRow>
                    <HeaderCell>Name</HeaderCell>
                    <HeaderCell>Website</HeaderCell>
                    <HeaderCell>Country</HeaderCell>
                    <HeaderCell>Focus</HeaderCell>
                    <HeaderCell>Minimum Check</HeaderCell>
                    <HeaderCell>Maximum Check</HeaderCell>
                    <HeaderCell>Typical Check</HeaderCell>
                  </HeaderRow>
                </Header>
                <Body>
                {tableList.map((item, index) => (
                  <Row key={index} item={item}>
                    <Cell>{item.name}</Cell>
                    <Cell>{item.website}</Cell>
                    <Cell>{item.country}</Cell>
                    <Cell>{item.focus}</Cell>
                    <Cell>{item.min_check_size}</Cell>
                    <Cell>{item.max_check_size}</Cell>
                    <Cell>{item.sweet_spot_check_size}</Cell>
                  </Row>
                ))}
              </Body>
            </>
            )
          }
        </Table>
        )
        : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
