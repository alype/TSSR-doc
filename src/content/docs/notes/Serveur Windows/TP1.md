---
title: TP1
editUrl: false
---

[TP01 (PDF)](/notes/serveur-windows/_docs/TP01_Elesco.pdf)

## Préparation du TP

![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529115449.png)

:::note
Le TP mentionne Windows Serveur 2019 et Windows 10, mais on va utiliser Windows Serveur 2022 et Windows 11 pour être plus à jour
:::

### Préparation Serveur Windows

Tout d'abord, on définis une adresse IP fixe :\
`ncpa.cpl`

![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529125001.png)

Et on change le nom de l'ordinateur :

`sysdm.cpl`

![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529125816.png)

Sur le serveur, sur la fenêtre d'Active Directory, on ajoute les rôles :

* Serveur DNS
* Contrôleur de domaine AD
* Serveur DHCP
* Serveur FSRM

:::caution[Attention]
Il vaut mieux ajouter et configurer l'AD **avant** le serveur DNS
:::

![](../../../../assets/notes/poste-de-travail/_attachments/pasted-image-20240528134153.png)

![](../../../../assets/notes/poste-de-travail/_attachments/pasted-image-20240528134418.png)

![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529125428.png)

#### Configurer le serveur DHCP :

<https://learn.microsoft.com/fr-fr/windows-server/networking/technologies/dhcp/quickstart-install-configure-dhcp-server?tabs=gui>

#### Configurer le contrôleur de domaine

<https://www.it-connect.fr/active-directory-adds-ajouter-un-controleur-de-domaine-a-un-domaine-existant/#V_Promouvoir_le_serveur_en_tant_que_controleur_de_domaine_ADDS>

![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529122849.png)

![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240530101951.png)

### Partitionner le disque

Diskpart

```
diskpart
list disk
sel disk 0
create part primary
format fs=NTFS quick label=data
assign letter E
```

### Préparation PC Windows 11

On va sur `ncpa.cpl`, IPv4 :

![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529132042.png)

On va sur `sysdm.cpl` pour connecter le PC au domaine.

![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529130904.png)

On redémarre le PC et on se connecte au compte administrateur sur le domaine ELECSO :

![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529131505.png)

#### Installer les RSAT

<https://www.tech2tech.fr/comment-installer-rsat-sur-windows-10-version-1809-et-superieur/#Methode_1_Via_lajout_de_fonctionnalite_Windows>

#### Utiliser les RSAT

Une fois installées, on peut rajouter les RSAT à une MMC : `mmc`

![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529133052.png)

## 1) UO, groupes et utilisateurs

![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529141911.png)

## 2) Permissions NTFS sur les dossiers

![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529142843.png)

Autorisation de partage pour Gestion :\
![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529144047.png)

Autorisation NTFS pour Gestion :\
![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529143647.png)

Autorisations de partage pour Informatique :\
![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529143837.png)

Autorisations NTFS pour Informatique :

On ajoute les groupes aux autorisations NTFS :\
![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529144305.png)

Voici le résultat des droits attribués :\
![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529144718.png)

Autorisations de partage pour Direction :\
![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529145725.png)

Autorisations NTFS pour Direction :\
![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529145710.png)

## 3) GPO

On veut mettre un script au démarrage de l'ordinateur.

`gpedit.msc`

On va sur les paramètres de la GPO :\
![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240530112754.png)

On se connecte sur Jim Boston, on vois que les emplacements réseau sont bien installés :\
![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529163311.png)

## 4) Quotas

* On va sur `fsrm.msc`
* On crée un modèle de quota :\
  ![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529170506.png)
  ![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529170151.png)

## 5) DHCP

Configuration de l'étendue DHCP :\
![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529171632.png)

On paramètre la réservation d'IP pour POSTE01 :\
![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529172108.png)

Il nous faut l'adresse MAC de POSTE01 :\
![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529171551.png)

La réservation est active :\
![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529172633.png)

On peut voir que la carte réseau de POSTE01 a bien 10.0.0.12 en adresse IP:\
![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240529172712.png)

:::caution[Attention]
Il vaut mieux prendre un ipconfig /all et mettre en surbrillance les éléments importants :\
![](../../../../assets/notes/serveur-windows/_attachments/pasted-image-20240530114456.png)
:::
