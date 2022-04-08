---
title: Sound & music
desc: Life is music!
pageName: Music
---

Recently I've been having a lot of fun with music production as well as [web audio](https://webaudio.github.io/web-audio-api/#introductory) programming.

On this page you can see the 2 coming together:

* Played around with [Ableton Live](https://www.ableton.com/en/live/), [Arturia Mini V](https://www.arturia.com/products/analog-classics/mini-v/overview), [GSi VB3-II](https://www.genuinesoundware.com/?a=showproduct&b=44) and [Roland TR-8S](https://www.roland.com/global/products/tr-8s/) and uploaded 2 test tracks to [SoundCloud](https://soundcloud.com/woutervernaillen).
* Upon load of this webpage page:
  * all tracks from my SoundCloud profile are fetched using the [SoundCloud API](https://developers.soundcloud.com/docs/api/reference)
  * a [Wavesurfer](https://wavesurfer-js.org/) is created which will draw a waveform visualization of the most recently uploaded SoundCloud track and starts buffering the audio stream
  * an [AudioMotion Analyzer](https://audiomotion.dev/) is created and attached to the wavesurfer AudioNode
* Upon hitting Play (which will be enabled once the buffer is ready):
  * Audio is started, progress is shown on the waveform and the AudioMtion Analyzer shows the audio spectrum
