
export const projectColumn = [
    {
      title: "ProjectID",
      dataIndex: "projectID",
      key: 'projectID',
      fixed: 'left',
      width:80,
    },
    {
      title: "YearQuarter",
      dataIndex: "yearQuarter",
      key: 'yearQuarter',
      fixed: 'left',
      width:80,
      sorter: (a, b) => a.yearQuarter - b.yearQuarter,
      sortDirections: ["ascend", "descend"]
    },
    {
      title: "ProjectName",
      dataIndex: "projectName",
      key: 'projectName',
    },
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Country",
      dataIndex: "country",
      filters: [
        {
          text: "中国",
          value: "中国"
        },
        {
          text: "新加坡",
          value: "新加坡"
        }
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.country.indexOf(value) === 0,
    },
    {
      title: "Region",
      dataIndex: "region"
    },
    {
      title: "Province",
      dataIndex: "province"
    },
    {
      title: "City",
      dataIndex: "city",
      minWidth: 80,
    },
    {
      title: "CityTier",
      dataIndex: "cityTier"
    },
    {
      title: "ProjectLevel",
      dataIndex: "projectLevel"
    },
    {
      title: "NLA",
      dataIndex: "NLA"
    },
    {
      title: "AreaOpenning",
      dataIndex: "areaOpenning"
    }
  ];
  