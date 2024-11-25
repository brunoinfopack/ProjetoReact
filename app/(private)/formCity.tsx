import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Pressable, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { router } from "expo-router";

export default function FormCityScreen() {
    const [inputNome, setInputNome] = useState("");
    const [inputPais, setInputPais] = useState("Brasil");
    const [inputData, setInputData] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [inputPassaporte, setInputPassaporte] = useState(false);

    const listaPais = [
        { label: "Brasil", value: "BR" },
        { label: "Estados Unidos", value: "EUA" },
        { label: "França", value: "FR" },
        { label: "Espanha", value: "ES" },
        { label: "Portugal", value: "PT" },
        { label: "Itália", value: "IT" },
    ];

    return (
        <View style={styles.formContainer}>
            <Text style={styles.title}>Cadastro de Cidade</Text>
            <View style={styles.section}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nome da Cidade"
                    value={inputNome}
                    onChangeText={setInputNome}
                />
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>País</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={inputPais}
                    onValueChange={setInputPais}
                >
                    {listaPais.map(pais => (
                        <Picker.Item key={pais.value} {...pais} />
                    ))}
                </Picker>
            </View>
            <View style={styles.section}>
                <Pressable
                    style={styles.datePickerButton}
                    onPress={() => setShowDatePicker(true)}
                >
                    <Text style={styles.datePickerText}>Data de Registro</Text>
                    <Text style={styles.dateText}>{inputData.toLocaleDateString("pt-BR")}</Text>
                </Pressable>
                {showDatePicker && (
                    <DateTimePicker
                        value={inputData}
                        onChange={(_, date) => {
                            setShowDatePicker(false);
                            if (date) setInputData(date);
                        }}
                    />
                )}
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>Possui Passaporte?</Text>
                <View style={styles.switchOption}>
                    <Text style={styles.switchText}>Não</Text>
                    <Switch value={inputPassaporte} onValueChange={setInputPassaporte} />
                    <Text style={styles.switchText}>Sim</Text>
                </View>
            </View>
            <Pressable
                style={styles.submitButton}
                onPress={() =>
                    router.push(
                        `/(private)/formCityConfirm?nome=${inputNome}&pais=${inputPais}&data=${inputData.toLocaleString(
                            "pt-BR"
                        )}&passaporte=${inputPassaporte}`
                    )
                }
            >
                <Text style={styles.submitButtonText}>Salvar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f8f9fa",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 20,
        textAlign: "center",
    },
    section: {
        marginBottom: 15,
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        fontSize: 16,
        paddingVertical: 8,
    },
    label: {
        fontSize: 16,
        color: "#555",
        marginBottom: 8,
    },
    picker: {
        fontSize: 16,
        color: "#333",
    },
    datePickerButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    datePickerText: {
        fontSize: 16,
        color: "#555",
    },
    dateText: {
        fontSize: 16,
        color: "#333",
    },
    switchOption: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    switchText: {
        fontSize: 16,
        color: "#555",
    },
    submitButton: {
        backgroundColor: "#28a745",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
    },
    submitButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});
