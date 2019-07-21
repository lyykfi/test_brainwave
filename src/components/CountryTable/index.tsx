import React, { useState, useEffect } from "react";
import { Table, Tag, Input } from "antd";
import randomcolor from "randomcolor";

/**
 * IProp.
 */
interface IProp {
  data: any[],
  filters: any,
}

/**
 * Finds values.
 * @param props 
 */
function applySearch(data: any, search: string) {
  if (!search) return data;

  search = search.toLowerCase();
  return data.filter((item: any) => {
    return item.name.toLowerCase().indexOf(search) > -1;
  });
}

/**
 * Countries table component.
 * @param props - Props for the component.
 */
export const CountriesTable: React.StatelessComponent<IProp> = (props) => {
  const { data, filters } = props;
  const [ search, setSearch ] = useState("");

  /**
   * Table columns.
   */
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: any, b: any) => a.name.length - b.name.length,
    },
    {
      title: 'Region',
      dataIndex: 'region',
      key: 'region',
      sorter: (a: any, b: any) => a.region.length - b.name.length,
    },
    {
      title: 'Area',
      dataIndex: 'area',
      key: 'area',
      sorter: (a: any, b: any) => a.area - b.area,
    },
    {
      title: 'Population',
      dataIndex: 'population',
      key: 'population',
      sorter: (a: any, b: any) => a.population - b.population,
    },
    {
      title: 'Languages',
      dataIndex: 'languages',
      key: 'languages',
      render: (text: any) => {
        return text.map((item: any) => {
          return <Tag key={item}>{item}</Tag>;
        })
      },
      filters: (filters["languages"] || []).map((item: any) => {
        return {
          text: item,
          value: item,
        }
      }),
      onFilter: (value: any, record: any) => record.languages.indexOf(value) === 0,
    },
    {
      title: 'Currency',
      dataIndex: 'currencies',
      key: 'currencies',
      render: (text: any) => {
        return text.map((item: any) => {
          return <Tag key={item}>{item}</Tag>;
        })
      },
      filters: (filters["currencies"] || []).map((item: any) => {
        return {
          text: item,
          value: item,
        }
      }),
      onFilter: (value: any, record: any) => record.currencies.indexOf(value) === 0,
    },
  ];

  return <>
    <Input
      placeholder="Search name"
      value={search}
      onChange={(event) => { setSearch(event.target.value) }} />
    <Table
      className="table-list"
      dataSource={applySearch(data, search)}
      rowKey="name"
      columns={columns} />
    </>;
};

export default CountriesTable;
