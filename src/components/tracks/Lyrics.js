import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
// import { isEmpty } from 'lodash'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'
import { Card, Typography, Button, List, Avatar } from 'antd'
import { grey } from '@ant-design/colors'
import Moment from 'react-moment'

const { Paragraph } = Typography

const Lyrics = ({ match }) => {
  const [lyricState, setLyricState] = useState({
    track: {},
    lyrics: {},
    loading: true
  })

  useEffect(() => {
    const getLyrics = async trackId => {
      try {
        const getLyricsAction = axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${process.env.REACT_APP_MM_KEY}`
        )

        const getTrackAction = axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${trackId}&apikey=${process.env.REACT_APP_MM_KEY}`
        )

        const [lyricsRes, trackRes] = await Promise.all([
          getLyricsAction,
          getTrackAction
        ])

        setLyricState({
          track: trackRes.data.message.body.track,
          lyrics: lyricsRes.data.message.body.lyrics
            ? lyricsRes.data.message.body.lyrics
            : { lyrics_body: 'Lyrics Unavailable' },
          loading: false
        })
      } catch (error) {
        console.log(error)
      }
    }

    getLyrics(match.params.id)
  }, [match.params.id])

  const { track, lyrics, loading } = lyricState

  const additionalInfo = loading
    ? null
    : [
        { title: 'Album ID', info: track.album_id },
        {
          title: 'Song Genre',
          info:
            track.primary_genres.music_genre_list.length > 0
              ? track.primary_genres.music_genre_list[0].music_genre
                  .music_genre_name
              : 'Unavailable'
        },
        { title: 'Explicit Words', info: track.explicit == 0 ? 'No' : 'Yes' },
        { title: 'Last Updated', info: track.updated_time }
      ]

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/'>
            <Button type='link' style={backBtn}>
              Go Back
            </Button>
          </Link>

          <Card title={track.track_name} extra={track.artist_name}>
            <Paragraph>{lyrics.lyrics_body}</Paragraph>
          </Card>

          <List
            style={trackInfoListStyle}
            itemLayout='horizontal'
            dataSource={additionalInfo}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                  }
                  title={item.title}
                  description={
                    item.title != 'Last Updated' ? (
                      item.info
                    ) : (
                      <Moment format='DD/MM/YYYY'>{item.info}</Moment>
                    )
                  }
                />
              </List.Item>
            )}
          />
        </Fragment>
      )}
    </Fragment>
  )
}

const backBtn = {
  backgroundColor: grey.primary,
  color: 'white',
  marginBottom: '20px'
}

const trackInfoListStyle = {
  marginTop: '20px',
  paddingLeft: '10px',
  backgroundColor: 'white'
}

export default Lyrics
