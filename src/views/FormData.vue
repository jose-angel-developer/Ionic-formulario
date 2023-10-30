<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    Formulario Con data
                </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <!-- Contenedor principal -->
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <h1>Input</h1>
                        <!-- Campo de entrada de texto -->
                        <ion-input label="Nombre" label-placement="floating" 
                            placeholder="Escriba su nombre" maxlength="15" :counter="true"
                            :clear-input="true" color="primary" v-model="nombre"></ion-input>

                        <br><br>

                        <h1>Select</h1>
                        <!-- Campo de selección -->
                        <ion-select v-model="estados" label="Estados" label-placement="stacked"
                            cancel-text="Cerrar" ok-text="Seleccionar" placeholder="Seleccionar" color="primary" fill="solid">
                            <ion-select-option value="caracas">
                                Caracas
                            </ion-select-option>
                            <ion-select-option value="miranda">
                                Miranda
                            </ion-select-option>
                        </ion-select>

                        <h1>Checkbox</h1>

                        <!-- Casillas de verificación -->
                        <ion-checkbox v-model="ciudades[0]" label-placement="end" color="primary" value="teques">
                            Los teques
                        </ion-checkbox> <br>
                        <ion-checkbox v-model="ciudades[1]" label-placement="end" color="primary" value="rojas">
                            Rojas
                        </ion-checkbox> <br>
                        <ion-checkbox v-model="ciudades[2]" label-placement="end" color="danger" value="bolivar">
                            Bolivar
                        </ion-checkbox>
                        
                        <h1>Radio</h1>
                        <!-- Grupo de botones de radio -->
                        <ion-radio-group v-model="genero" allow-empty-selection="true">
                            <ion-radio value="mujer" label-placement="end" color="danger">Mujer</ion-radio>
                            <br>
                            <ion-radio value="hombre" label-placement="end" color="primary">Hombre</ion-radio>
                        </ion-radio-group>

                        <br>
                        <br>

                        <h1>Botones</h1>
                        <!-- Botón para guardar y mostrar datos -->
                        <ion-button @click="imprimirDatos" color="dark" expand="block" shape="round">Guardar</ion-button>
                        <br>
                    
                    </ion-col>
                </ion-row>

                <ion-row>
                    <ion-col v-show="datos">
                        <h2>Impresión</h2>
                        <div v-html="datos"></div>
                    </ion-col>
                </ion-row>
<br>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonHeader, IonToolbar, IonTitle, IonContent,
       IonGrid, IonRow, IonCol, IonInput, IonSelect, 
       IonSelectOption, IonCheckbox, IonRadioGroup, 
       IonRadio, IonButton } from '@ionic/vue';

export default {
    name: 'FormData',
    components: {
        IonTitle,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonGrid, 
        IonRow, 
        IonCol, 
        IonInput,
        IonSelect,
        IonSelectOption,
        IonCheckbox,
        IonRadioGroup, 
        IonRadio,
        IonButton
    }, 
    data() {
        return {
            nombre: '',       // Almacena el nombre ingresado
            estados: '',      // Almacena el estado seleccionado
            ciudades: [],      // Almacena las ciudades seleccionadas
            genero: '',       // Almacena el género seleccionado
            datos: ''         // Almacena la información del formulario
        }
    },
    methods: {
        imprimirDatos() {
            // Filtrar las ciudades seleccionadas y crear una cadena con ellas
            const ciudadesSeleccionados = this.ciudades
                .filter(seleccionado => seleccionado)
                .map((_, index) => ['Los teques', 'Rojas', 'Bolivar'][index])
                .join(', ');

            // Construir la cadena de datos
            this.datos = `
                <h3>Nombre: </h3>${this.nombre}<br>
                <h3>Estados: </h3>${this.estados}<br>
                <h3>Ciudades: </h3>${ciudadesSeleccionados}<br>
                <h3>Genero: </h3>${this.genero}<br>
            `;

            // Imprimir en la consola
            console.log(this.datos);
        }
    }
}
</script>

<style>
    
</style>
