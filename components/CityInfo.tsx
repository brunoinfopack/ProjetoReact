import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Cidade from "@/models/Cidade";
import LocationsList from './LocationsList';

export default function CityInfo(props: { cidade: Cidade }) {
    const { cidade } = props;
    const { nome, pais, pontos } = cidade;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                {/* Imagem de destaque */}
                <Image
                    source={{ uri: 'https://picsum.photos/300/150' }}
                    style={styles.cityImage}
                />

                {/* Informações da cidade */}
                <View style={styles.cityDetails}>
                    <Text style={styles.cityName}>{nome}</Text>
                    <Text style={styles.cityCountry}>
                        <FontAwesome name="globe" size={16} color="#777" /> {pais}
                    </Text>
                </View>
            </View>

            {/* Lista de pontos */}
            {pontos && (
                <View style={styles.locationsContainer}>
                    <Text style={styles.locationsTitle}>Pontos Turísticos:</Text>
                    <LocationsList pontos={pontos} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#f4f4f6',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5, // Para sombra no Android
        marginBottom: 20,
    },
    cityImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    cityDetails: {
        padding: 15,
        alignItems: 'center',
    },
    cityName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 5,
    },
    cityCountry: {
        fontSize: 16,
        color: '#777',
        textAlign: 'center',
    },
    locationsContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Para sombra no Android
    },
    locationsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
});
