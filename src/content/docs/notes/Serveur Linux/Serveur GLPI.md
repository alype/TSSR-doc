---
title: Serveur Linux
editUrl: false
sidebar:
  order: 2
  badge:
    text: brouillon
    variant: note
description: Documentation sur Serveur Linux
tags:
  - TSSR
  - Cours
---

|       Commandes      |                                         Commentaire                                         |
| :------------------: | :-----------------------------------------------------------------------------------------: |
|         `--h`        |                                             help                                            |
|    `man <command>`   |                          permet d'afficher le manuel de la commande                         |
|      `man -k ls`     |                             affiche la liste de tous les manuels                            |
|         `cd`         |                                       change directory                                      |
|        `mkdir`       |                                        make directory                                       |
|         `cp`         |                                             copy                                            |
|         `ls`         |                                             list                                            |
|        `ls -l`       |                               liste en liste (avec les droits)                              |
|        `ls -a`       |                                  montre les fichiers cachés                                 |
| `touch <nomFichier>` |                                     crée un fichier vide                                    |
|    `cat > fichier`   |                            permet d'éditer rapidement un fichier                            |
|                      |                                                                                             |
|         `df`         |                   affiche l'espace libre sur le disque dur sur le système                   |
|        `df -h`       | affiche l'espace libre et utilisé sur les systèmes de fichiers montés (`-H` pour 1000 / mo) |
|        `df -i`       |           montre les inodes libres et utilisés sur les systèmes de fichiers montés          |
|      `fdisk -l`      |           montre les inodes libres et utilisés sur les systèmes de fichiers montés          |
|       `du -sh`       |               affiche l'utilisation totale du disque hors du répertoire actuel              |
|       `du -ah`       | montre l'utilisation du disque pour tous les fichiers et répertoires dans un format lisible |
|        `free`        |                              montre la RAM libre sur le système                             |
|       `free -h`      |                             montre la mémoire libre et utilisée                             |
|       `findmnt`      |             affiche le point de montage cible pour tous les systèmes de fichiers            |
|   `mount /xyz /abc`  |                          monte un périphérique dans / xyz sur / abc                         |

:::tip[Astuce]
La commande `history` permet d'accéder à l'historique des commandes.
`history | tail` permet d'afficher les 10 dernières lignes de l'historique
`Ctrl+R` permet de rentrer en mode recherche dans l'historique. On entre les premiers caractères de la commande à rechercher. Si on trouve, on appuis sur entrée pour sélectionner cette commande.
:::

## Se connecter sur un serv debian VirtualBox en shh

1. On met le réseau en accès par pont
2. Sur la VM : `ip a` . On vois sur 2. que l'interface est `enp0s3`.
3. `ifdown enp0s3`
4. `ifup enp0s3`
5. `ip a`. On note la nouvelle IP (on est en DHCP).
6. `ping 1.1.1.1` = ça réponds : on est bien connecté à internet.
7. Sur le PC, on ping la VM : `ping IP` . Si ça fonctionne, on peut lancer `ssh user@IP`.

## Logiciels à installer (sur windows)

A mettre dans `4.OUTILS/4.1.Réseau`

* MobaXterm : <https://mobaxterm.mobatek.net/download-home-edition.html>
* Putty : <https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html>
* teraterm : <https://github.com/TeraTermProject/teraterm/releases>

## Logiciels à installer (sur linux)

en root ou avec `sudo` devant :\
`apt install net-tools`\
`apt install tree`

## Gestion des utilisateurs

`adduser` = Permet de créer un utilisateur avec un prompt\
`useradd` = Permet de créer un utilisateur directement en ligne de commande, en une seule ligne

`passwd user` = permet de chiffrer le mdp\
`sudo chfn user` = permet de modifier les informations de l'user

`/etc/passwd` = Stockage des utilisateurs\
`/etc/group` = Stockage des groupes\
`/etc/shadow` = Stockage des mots de passe

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

## GLPI

On suis les instructions sur cette page : <https://www.it-connect.fr/installation-pas-a-pas-de-glpi-10-sur-debian-12/>

`glpiadm`

admin : glpi\_adm\@localhost pass: \
user : glpi password:&#x20;

`dbglpi`

`db_glpi;` = nom de la database. Le `;` permet de signifier la fin de ligne (?).\
`wget` = télécharger un lien

nano support conf : on change le nom de domaine avec tssr.info\
on change dans la conf le domaine

php.ini\
on modifie un truc en ON

support.tssr.info.tech.conf\
on re-modifie le fichier de conf

### Étape 4 - Installation de GLPI

On utilise l'IP au lieu du domaine

```
sudo mv /var/www/glpi/install/install.php /var/www/glpi/install/install-old.php
```

## Glossaire

UID = User IDentifiant
