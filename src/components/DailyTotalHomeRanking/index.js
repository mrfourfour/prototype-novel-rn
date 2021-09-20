import React, { useEffect } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import Loading from '../../atoms/Loading'
import useDailyTotalHomeRanking from '../../hooks/DailyTotalHomeRanking'

function DailyTotalHomeRanking() {
    const { isLoaded, isLoading, data, error, call } = useDailyTotalHomeRanking()

    const renderItem = ({ item, index }) => {
        const tag = item.tags.slice(0, 3).map(it => `#${it}`).join(" ").trim()

        return (
            <TouchableOpacity style={{
                marginVertical: 15,
                marginHorizontal: 8,
                width: 90,
            }}>
                <Image
                    source={{ uri: item.image.uri }}
                    style={{
                        resizeMode: "cover",
                        height: 120
                    }}
                />
                <Text style={{
                    fontSize: 14,
                    fontWeight: '700'
                }}>
                    {item.title}
                </Text>
                <Text style={{
                    fontSize: 12
                }}>{item.author}</Text>
                <Text style={{
                    fontSize: 10,
                    color: "#555555"
                }}>
                    {tag}
                </Text>
            </TouchableOpacity>
        )
    }
    useEffect(() => {
        if (!isLoaded && !isLoading) {
            console.log("hello")
            call()
        }
    }, isLoaded)

    return (
        <View style={{
            marginVertical: 20
        }}>
            <Text style={{
                fontSize: 24,
                marginLeft: 16,
                fontWeight: 'bold'
            }}>
                랭킹
            </Text>
            <Text style={{
                fontSize: 12,
                marginLeft: 16,
                color: '#555'
            }}>
                최근 24시간 내 인기 순위의 작품들을 모아봤어요!
            </Text>
            {
                isLoading
                    ? <Loading />
                    : <FlatList
                        horizontal
                        data={data}
                        contentContainerStyle={{ marginHorizontal: 16 }}
                        renderItem={renderItem}
                    />
            }
        </View>
    )
}

export default DailyTotalHomeRanking