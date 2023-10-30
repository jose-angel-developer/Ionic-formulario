<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    Formulario
                </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <!--GRIDS-->
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <h1>Input</h1>
                        <ion-input label="Nombre" label-placement="floating" 
                        placeholder="Escriba su nombre" maxlength="15" :counter="true"
                        :clear-input="true" color="primary"></ion-input>

                        <br><br>

                        <h1>Select</h1>
                        <ion-select label="Departamento" label-placement="stacked"
                        cancel-text="Cerrar" ok-text="Seleccionar" placeholder="Seleccionar" color="primary" fill="solid">
                            <ion-select-option value="caracas">
                                Caracas
                            </ion-select-option>
                            <ion-select-option value="miranda">
                                Miranda
                            </ion-select-option>
                        </ion-select>

                        <h1>Checkbox</h1>

                        <ion-checkbox label-placement="end" color="primary" value="teques">
                            Los teques
                        </ion-checkbox> <br>
                        <ion-checkbox label-placement="end" color="primary" value="teques">
                            Rojas
                        </ion-checkbox> <br>
                        <ion-checkbox label-placement="end" color="danger" value="teques">
                            Bolivar
                        </ion-checkbox>
                        
                        <h1>Radio</h1>
                        <ion-radio-group allow-empty-selection="true">
                            <ion-radio value="mujer" label-placement="end" color="danger">Muejer</ion-radio>
                            <br>
                            <ion-radio value="hombre" label-placement="end" color="primary">Hombre</ion-radio>
                        </ion-radio-group>

                        <br>
                        <br>

                        <h1>Botones</h1>
                        <ion-button color="dark" expand="block" shape="round">Guardar</ion-button>
                        <br>
                    
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script>
import {IonHeader, IonToolbar, IonTitle, IonContent,
       IonGrid, IonRow, IonCol, IonInput, IonSelect, 
       IonSelectOption, IonCheckbox, IonRadioGroup, 
       IonRadio, IonButton } from '@ionic/vue';

export default{
    name: 'FormComponents',
    components:{
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
    }
}
</script>

<style>

</style>