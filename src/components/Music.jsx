import React from 'react';
import PropTypes from 'prop-types';

export default class Music extends React.Component {
  render() {
    const { musics: { trackName, trackId, previewUrl } } = this.props;
    return (
      <div>
        <span>{trackName}</span>
        <span>{trackId}</span>

        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          {' '}
          {' '}
          <code>audio</code>
          .
        </audio>

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
