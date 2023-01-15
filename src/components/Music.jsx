import React from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Carregar from '../pages/Carregar';

export default class Music extends React.Component {
  state = {
    carregando: false,
    favoritar: false,
  };

  componentDidMount() {
    this.musicasFav().then((favoritar) => {
      this.setState({ favoritar });
    });
  }

  handleChangeFavorite = async ({ target: { checked } }) => {
    const { musics } = this.props;
    this.setState({ carregando: true });
    if (checked) {
      await addSong(musics);
    }
    this.setState({ carregando: false, favoritar: checked });
  };

  musicasFav = async () => {
    const { musics: { trackId } } = this.props;
    const songs = await getFavoriteSongs();
    return songs.find((song) => song.trackId === trackId) !== undefined;
  };

  render() {
    const { musics: { trackName, trackId, previewUrl } } = this.props;
    const { carregando, favoritar } = this.state;
    return (
      <div>
        <span>{trackName}</span>
        <span>{trackId}</span>

        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          Não suportado
          {' '}
          {' '}
          {' '}
          <code>audio</code>
          .
        </audio>

        <label htmlFor="favoritar">
          {' '}
          {' '}
          {' '}
          Minhas favoritas
          <input
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            name="favoritar"
            id="favoritar"
            onChange={ this.handleChangeFavorite }
            checked={ favoritar }
          />
        </label>
        <div>
          { carregando && <Carregar /> }
        </div>
      </div>

    );
  }
}

Music.propTypes = {
  musics: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
    previewUrl: PropTypes.string.isRequired,
  }).isRequired,
};
