---
title: Commutation et Vlan
editUrl: false
---

## Couche 2 : Liaison de données

Transmission de trame.

NIC / LIC

NIC : @ physique : MAC

| OUI | N° Série |
| :-: | :------: |

OUI : Organisation Unique Identifier

**Hub** : half duplex. Communiquer chacun leur tour. Fonctionne en broadcast, diffuse à tous les appareils connectés.

Switch :

![](../../../../assets/notes/réseaux/_attachments/pasted-image-20240603095600.png)

Le switch calcul l'adresse réseau à partir de l'@ IP et du masque avec un ET logique (&).

![](../../../../assets/notes/réseaux/_attachments/pasted-image-20240603100334.png)

Le Switch contient une table d'a@ MAC. En recevant la trame, il lit la trame. @ MAC 1 entre par port 1. Il connaît la source mais pas la destination. Le switch va donc faire un Broadcast.

## Protocole ARP

Contenu du Broadcast : ARP : FFFFFFFFFFFF (12 F) + @ IP destination.

Le PC2, qui correspond à l'adresse IP de destination, va envoyé une trame en unicast avec son adresse MAC.

PC2 : @MAC\@IP

Une fois que le switch à sa table complète, il construit un tunnel entre le port 1 et 2.\
ASIC : (le tunnel) = Application Specific Integrated Circuit.

Au bout de 5 minutes, le switch va effacer les adresses mac inutilisées depuis plus de 300 secondes (?).

## VLAN

Une VLAN est un cloisonnement. Une partie des ports appartiennent à une VLAN, une autre partie à l'autre.

![](../../../../assets/notes/réseaux/_attachments/pasted-image-20240603105410.png)

Code pour le switch :

```txt
SW1
====
en
conf t
hostname SW1

vlan 10
name IT

vlan20
name RH

int f0/1
switchport mode access
swi access vlan 10

int range f0/2-10
switchport mode acces
swi acces vlan 10

int range f0/11-20
switchport mode acces
swi acces vlan 20
```

```txt
SW1
====
show MAC-address-table 
```
