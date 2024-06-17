---
title: Historique Linux
editUrl: false
sidebar:
  order: 1
  badge:
    text: nouveau
    variant: tip
description: Historique Linux
tags:
  - TSSR
---

Linux est un système d'exploitation.\
Nous allons d'abord voir l'historique des Systèmes d'exploitation.

## Histoire des OS

En 1964 : Une société, AT\&T (Bell), le MIT et General Eletric se sont réunis pour concevoir un système d’exploitation appelé Multics. Il est développé en Assembleur un langage très complexe.

1968 : GE + MIT abandonnent le projet.

1969 : Un language est créé, le langage B est créé, le Basic. Bien plus simple que l'Assembleur. AT\&T : reprogramme Multics en langage B. Devient Unics (car une seule société sur le projet).

1970 : Horodatage de l'informatique (naissance de l'informatique).

1972 (?) : Langage C.  On re-code Unics, qui devient Unix.

1976 : Accord entre Bell (AT\&T) et l'université de Berkley (il faut former des étudiants à Unics). Bercley crée la fondation BSD : Berkeley Software Distribution. C'est grave, car c'est Berkeley qui s'approprie le système (le contrat n'était pas très solide).\
BSD (?) : NDA = Non-Distribution Agreement = Quiconque bénéficie du code source doit cotiser.

IBM, HP, Sun (Solaris), Apple : Toutes ces entreprises cotisent à la fondation pour obtenir le code source.

IBM modifie le code source -> AIX\
HP -> HP-UNIX\
Sun -> Solaris (?)\
Apple -> Mac

Richard Stallman : Pas satisfait des événements avec la BSD. Pas d'accord avec la vente du système, défend l'open-source.\
Il crée le projet GNU (= GNU is Not Unix) avec le langage C.\
Il veut protéger le code source de GNU, donc il crée la fondation FSF : la Free Software Fondation. Il crée une license GLP = General Public License.\
Il continue à développer des applications (des commandes).

1991 : Linus Trovaldos, pendant son projet de doctorat, va développer un kernel (noyau).\
Kernel : couche qui comminque entre les commandes et le hardware. Permet la gestion des ressources (DIsk, Stockage, RAM, CPU, carte mère, GPU (carte graphique), etc.).\
Il l’appelle Minix.\
Il le développe pour qu'il soit multitache et multi-utilisateur.\
Il lui manque la partie Shell avec les applications (commandes), donc il fait une annonce :\
Il cherche une collaboration pour les applications. Richard Stallman réponds.\
Cela devient Linux.

1993 : deux distribution sont développées :

* Debian, qui est gratuite
* Red Hat, qui est payante, avec un support inclus.

Plus tard, à partir de la distribution Debian, Ubuntu est crée. Fedora est crée à partir de Red Hat.

Ubuntu : 2 versions chaque année, en avril et en octobre. Pour 2024 : 24.4 et 24.10.\
Ubuntu sers un peu de la version test d'Ubuntu. Debian est réputée comme **stable**.

De son côté, RedHat fait la même chose qu'Ubuntu avec Fedora, une version tous les 18 mois.

Depuis 2 ans, IBM a racheté RedHat donc a arrêté CentOS (qui était la version gratuite de RedHat). C'est pour cela que Rocky Linux existe depuis.

:::note[Tip]
Pour avoir des infos sur les différentes distribution linux :  <https://distrowatch.com> (surtout la carte des distribution)
:::

## Ligne de commande Linux

`[sysadmin@localhost ~]$`

![](../../../../assets/notes/serveur-linux/_attachments/screenshot_20240617_122326.png)

![](../../../../assets/notes/serveur-linux/_attachments/screenshot_20240617_122900.png)

`whoami` = Connaître le compte connecté\
`hostname` = voir le hostname\
`pwd` =\
`cat /etc/passwd`  = voir la liste des utilisateurs\
`tty` = numéro du terminal utilisé\
`cat /etc/hostname` = voir la liste des hostname

`sudo -i` = se connecter en root\
`nano /etc/hostname` = pour modifier le hostname

`shift+ctrl+n` = ouvrir une nouvelle fenêtre

`chvt 1` = virtual type (?)
