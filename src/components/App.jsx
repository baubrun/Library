import React, { Component } from "react";
import { Headings, Rows, DataTable } from "./openLibrary/OpenLibrary";
import axios from "axios"

const headings = ["Last updated at", "By Author", "Summary"]

class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data: []
      }
    }
    
    mapOpenLibraryData = data => {
      return data.map(data => {
        return {
          when: data.timestamp ,
          who: data.author.key,
          description: data.comment
        }
      })
    }

    componentDidMount(){
      axios.get('http://openlibrary.org/recentchanges.json?limit=10')
      .then(res => {
        const data = this.mapOpenLibraryData(res.data);
        this.setState({data})
        console.log(data);
      })
    }
    
  render() {

    return (
      <div>
        <DataTable >
          <Headings headings={headings} /> 
          <Rows data={this.state.data} /> 
        </DataTable>
      </div>
    );
  }
}

export default App;
