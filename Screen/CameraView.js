import React, { useState } from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    PermissionsAndroid,
    Alert,
    Platform,
    TouchableHighlight,
} from 'react-native';

import * as FaceDetector from 'expo-face-detector';

const CameraView = () => {

    return (
        <Camera
            // ... other props
            onFacesDetected={this.handleFacesDetected}
            faceDetectorSettings={{
                mode: FaceDetector.Constants.Mode.fast,
                detectLandmarks: FaceDetector.Constants.Landmarks.none,
                runClassifications: FaceDetector.Constants.Classifications.none,
                minDetectionInterval: 100,
                tracking: true,
            }}
        />
    );
}
export dafault CameraView;