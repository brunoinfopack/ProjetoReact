import { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, useWindowDimensions, Pressable } from 'react-native';
import Cidade from "@/models/Cidade";
import CitiesList from '@/components/CitiesList';
import CityInfo from '@/components/CityInfo';
import { router } from 'expo-router';
import { CitiesContext, CitiesContextState } from '@/context/CitiesContext';

export default function PrivateScreen() {
    const { cities: cidades } = useContext(CitiesContext) as CitiesContextState;
    const [cidade, setCidade] = useState<Cidade | null>(null);
    const { width, height } = useWindowDimensions();
    const isPortrait = width < height;

    const selecionarCidade = (cidade: Cidade) => {
        if (isPortrait)
            router.push(`/cidades/${cidade.id}`);
        else
            setCidade(cidade);
    };

    return (
        <View style={styles.container}>
            <View style={isPortrait ? styles.listContainerPortrait : styles.listContainerLandscape}>
                <Text style={styles.title}>Cidades</Text>
                <CitiesList cidades={cidades} onSelected={selecionarCidade} />

                <View style={styles.actionButtons}>
                    <Pressable
                        style={[styles.button, styles.buttonForm]}
                        onPress={() => router.push('/(private)/formCity')}>
                        <Text style={styles.buttonLabel}>Formulario</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.buttonLocation]}
                        onPress={() => router.push('/(private)/location')}>
                        <Text style={styles.buttonLabel}>Mapa</Text>
                    </Pressable>
                </View>
            </View>

            {!isPortrait && cidade && (
                <View style={styles.cityInfoContainer}>
                    <CityInfo cidade={cidade} />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f6',
        padding: 16,
    },
    listContainerPortrait: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    listContainerLandscape: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    actionButtons: {
        marginTop: 20,
        width: '100%',
    },
    button: {
        width: '100%',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
        elevation: 4,
    },
    buttonLocation: {
        backgroundColor: '#0000FF',
    },
    buttonForm: {
        backgroundColor: '#778899',
    },
    buttonLabel: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    cityInfoContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        elevation: 4,
    },
});
