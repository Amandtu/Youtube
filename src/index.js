import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import YTSearch from "youtube-api-search";
import "./style.css";

const API_key = "AIzaSyBSHpIApxzaAvAKV0GPosZ9FTKIDcv0Yys";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    YTSearch({ key: API_key, term: "football" }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  videoSearch(term) {
    YTSearch({ key: API_key, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar SearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          VideoSelect={selectedVideo => {
            this.setState({ selectedVideo });
          }}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
