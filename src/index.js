import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// API key from Google to use API
const API_KEY = 'AIzaSyBjEmYdKyD8VaavuLFJsCwr_pNAC2lt9PY';

// Create a new component.
// This component should produce some HTML
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: []	
		};

		// Example fetch
		YTSearch({key: API_KEY, term: 'shooting stars'}, (videos) => {
			this.setState({ videos }); // ES6 new way
			// this.setState({ videos: videos }); // same as this 
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
