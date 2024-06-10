---
title: Serveur Linux
editUrl: false
sidebar:
  order: 1
  badge:
    text: nouveau
    variant: tip
description: Documentation sur Serveur Linux
tags:
  - TSSR
  - Cours
---

|     Commandes     |                                         Commentaire                                         |
| :---------------: | :-----------------------------------------------------------------------------------------: |
|        `-h`       |                                             help                                            |
|        `cd`       |                                       change directory                                      |
|      `mkdir`      |                                        make directory                                       |
|        `cp`       |                                             copy                                            |
|        `ls`       |                                             list                                            |
|      `ls -l`      |                               liste en liste (avec les droits)                              |
|      `ls -a`      |                                  montre les fichiers cachés                                 |
|                   |                                                                                             |
|        `df`       |                   affiche l'espace libre sur le disque dur sur le système                   |
|      `df -h`      | affiche l'espace libre et utilisé sur les systèmes de fichiers montés (`-H` pour 1000 / mo) |
|      `df -i`      |           montre les inodes libres et utilisés sur les systèmes de fichiers montés          |
|     `fdisk -l`    |           montre les inodes libres et utilisés sur les systèmes de fichiers montés          |
|      `du -sh`     |               affiche l'utilisation totale du disque hors du répertoire actuel              |
|      `du -ah`     | montre l'utilisation du disque pour tous les fichiers et répertoires dans un format lisible |
|       `free`      |                              montre la RAM libre sur le système                             |
|     `free -h`     |                             montre la mémoire libre et utilisée                             |
|     `findmnt`     |             affiche le point de montage cible pour tous les systèmes de fichiers            |
| `mount /xyz /abc` |                          monte un périphérique dans / xyz sur / abc                         |

## Se connecter sur un serv debian VirtualBox en shh

1. On met le réseau en accès par pont
2. Sur la VM : `ip a` . On vois sur 2. que l'interface est `enp0s3`.
3. `ifdown enp0s3`
4. `ifup enp0s3`
5. `ip a`. On note la nouvelle IP (on est en DHCP).
6. `ping 1.1.1.1` = ça réponds : on est bien connecté à internet.
7. Sur le PC, on ping la VM : `ping IP` . Si ça fonctionne, on peut lancer `ssh user@IP`.

## Gestion des utilisateurs

`adduser` = Permet de créer un utilisateur

`/etc/passwd` = Stockage des utilisateurs\
`/etc/group` = Stockage des groupes\
`/etc/shadow` = Stockage des mots de passe

`passwd user` = permet de chiffrer le mdp

## Permissions

`chmod`  = changement de permissions\
`chown` = changement de propriétaire

4= read\
2= write\
1= execute\
On additionne les droits en base 8 pour obtenir un nombre : 6 = 4+2 = read+write = rw-

UGO = User Group Other = Ordre dans lequel linux lis les droits.

## Réseau

`netstat -ntpl | grep ssh`\
`netstat -anp | grep ssh`

`/etc/network/interface` = dossier où sont stockées les interfaces réseau

`inet dhcp`\
`inet static` {IP MASQUE GATEWAY}

## Glossaire

UID = User IDentifiant
