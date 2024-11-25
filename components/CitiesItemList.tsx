import { View, Text, StyleSheet, Pressable } from "react-native";
import Cidade from "@/models/Cidade";

export default function CitiesItemList(props: {
    item: Cidade | null,
    onSelected: (cidade: Cidade) => void;
}) {
    const { item, onSelected } = props;
    const { nome, pais, atualizado } = item as Cidade;
    const atualizadoFormat = new Date(atualizado).toLocaleDateString("pt-BR");

    return (
        <Pressable style={styles.card} onPress={() => onSelected(item as Cidade)}>
            <View style={styles.cardHeader}>
                <Text style={styles.cityName}>{nome}</Text>
                <Text style={styles.countryName}>{pais}</Text>
            </View>
            <View style={styles.cardFooter}>
                <Text style={styles.updatedText}>Atualizado em: {atualizadoFormat}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    cityName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    countryName: {
        fontSize: 16,
        color: '#777',
    },
    cardFooter: {
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 10,
    },
    updatedText: {
        fontSize: 14,
        color: '#999',
        textAlign: 'right',
    },
});
