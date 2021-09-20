import React from 'react'
import {
    View,
    Text,
    ScrollView
} from 'react-native'
import BannerCarousel from '../../components/BannerCarousel';
import DailyTotalHomeRanking from '../../components/DailyTotalHomeRanking';


function Home() {
    return (
        <ScrollView contentContainerStyle={{ backgroundColor: "#fff"}}>
            <BannerCarousel />
            <DailyTotalHomeRanking />
            <DailyTotalHomeRanking />
            <DailyTotalHomeRanking />
            <DailyTotalHomeRanking />
            <DailyTotalHomeRanking />
        </ScrollView>
    )
}

export default Home;