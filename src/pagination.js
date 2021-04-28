
//-------------------à mettre dans le state-----------
currentPage: 1,
logPerPage: 2,
//----------------------------------------------------
handleChange = value => {
    this.setState({
      currentPage: value
    });
  };

handleSelectChange = e => {
    this.setState({
      logPerPage: e.target.value,
      currentPage: 1
    });
  };   
//----------------------------------------------------

        const {
            currentPage,
            logPerPage,
            log
          } = this.state;

          const indexOfLastLog = currentPage * logPerPage;
          const indexOfFirstLog = indexOfLastLog - logPerPage;

//---------------------------------------
<div className="pagination_div">
<Pagination
  defaultCurrent={this.state.currentPage}
  defaultPageSize={this.state.logPerPage} //default size of page
  pageSize={this.state.logPerPage}
  onChange={this.handleChange}
  total={/*loadingOk && */log.length > 0 && log.length} //total number of card data available
/>

<div>
  <select
    value={this.state.logPerPage}
    onChange={this.handleSelectChange}
  >
    <option>4</option>
    <option>8</option>
    <option>10</option>
  </select>
</div>
</div>