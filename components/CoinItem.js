import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const CoinItem = ({coin}) => {
    
    return (

        <View style={styles.containerItem}>

            <View style={styles.coinName}>

                <Image style={styles.image} source={{uri: coin.image}}/>

                <View style={styles.containerNames}>


                    <Text style={styles.text}>{coin.name}</Text>

                    <Text style={styles.textSymbol}>{coin.symbol}</Text>


                </View>
            </View>


            <View>

                <Text style={styles.textPrice}>${coin.current_price}</Text>


                <Text style={[styles.pricePercentage, coin.price_change_percentage_24h > 0 ? styles.priceUp: styles.priceDown]}>{coin.price_change_percentage_24h.toFixed(2)}%</Text>

            </View>

            

        </View>

        
    )
}

const styles = StyleSheet.create({

    containerItem: {

        backgroundColor: "#121212",

        paddingTop: 10,

        flexDirection: "row",

        justifyContent: "space-between",

    },

    text: {

        color: "#fff",

        textAlign: "right",

    },

    textPrice: {

        color: "#ffffff",

        textAlign: "right",

    },

    image: {

        width: 30,

        height: 30,

    },

    coinName: {

        flexDirection: "row",

    },

    textSymbol: {

        color: "#434343",

        textTransform: "uppercase",

    },

    containerNames: {

        marginLeft: 10,


    },

    pricePercentage: {

        textAlign: "right"

    },

    priceUp: {

        color: "#4CAF50",

    },

    priceDown: {

        color: "#FC4422",

    }

})

export default CoinItem
