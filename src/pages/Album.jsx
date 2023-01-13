import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Music from '../components/Music';
import getMusics from '../services/musicsAPI';

export default class Album extends Component {
  state = {
    musics: undefined,
    albumm: undefined,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const music = await getMusics(id);

    this.setState({
      musics: music.slice(1, music.length),
      albumm: music[0],
    });
  }

  render() {
    const { albumm, musics } = this.state;
    return (
      <div data-testid="page-album">
        <Header />

        <p data-testid="artist-name">
          {albumm ? `Artista: ${albumm.artistName}` : ''}
        </p>

        <p data-testid="album-name">
          {albumm ? `Artista: ${albumm.collectionName}` : ''}
        </p>

        {musics ? musics.map((music) => (
          <Music
            key={ music.trackid }
            musics={ music }
          />)) : null}

      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
