---
title: ClapIR
date: 2013-01-08T08:00:00.000Z
---

![](/public/images/clapir.png)

ClapIR is an application that allows users to measure the acoustic properties of rooms quickly and easily. From a simple recording of a clap, or other loud noise, the app calculates reverberation time, decay curve, frequency decay, frequency response, and impulse spectra.

Reverberation time is defined as the amount of time it takes for the impulse to decay by 60 dB. Frequency decay is similar, but is instead applied to various frequency bands within the impulse. This measurement is associated with clarity of sound. Frequency response is the ratio of the direct sound to the reverberant sound. This measurement is associated with warmth or brightness of sound. The impulse spectra is used to determine whether or not you provided a good impulse: one that has roughly equal energy across all frequencies. The decay curve can be used to verify the reverberation time calculation.

ClapIR is based on research done at Northwestern University by Prem Seetharaman and [Stephen Tarzia](www.stevetarzia.com). Our work was published in the 132nd Proceedings of the Audio Engineering Society and presented in Budapest, Hungary in April 2012. Read the paper [here](public/papers/seetharaman_tarzia_aes12.pdf).

ClapIR used to be available in the [Play store](https://play.google.com/store/apps/details?id=com.seeth.clapir) an is currently in the [iOS app store](https://itunes.apple.com/us/app/clapir-acoustics-measurement/id521153051?mt=8).

This is an open source project. Code for the Android app is available [here](http://github.com/pseeth/clapir), code for the iOS app is available [here](http://github.com/starzia/ClapIR), and the MATLAB code used to prototype is available [here](http://github.com/pseeth/claps).
