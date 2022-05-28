const skillsList = [
    { title: "React JS", value: 85 },
    { title: "React Native", value: 80 },
    { title: "Next js", value: 80 },
    { title: "Material UI", value: 80 },
    { title: "Styled components", value: 80 },
    { title: "Node JS ", value: 60 },
    { title: "Express JS ", value: 70 },
    { title: "Firebase", value: 70 },
    { title: "HTML", value: 80 },
    { title: "CSS", value: 75 },
    { title: "Bootstrap", value: 70 },
];
const projectList = [
    {
        id: 1,
        title: "Bixpand.com",
        technologies: ["React JS", "Node JS", "Postgresql", "Graphql",],
        backgroundImage:
            "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
        frontImage: "https://bixpand.com/img/bixpand-logo-web.png",
    },
    {
        id: 2,
        title: "Revealr",
        technologies: ["React JS"],
        backgroundImage:
            "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
        frontImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5Yg4aaCXv_v7UV_9NbMMvTQtSkJBywZt3A&usqp=CAU",
    },
    {
        id: 3,
        title: "Movies & Events Management System",
        technologies: ["React JS", "Node JS", "MongoDB"],
        backgroundImage:
            "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
        frontImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOr6b6wcBceS7PvA2uGZqokgOW361g926qw&usqp=CAU",
    },
    {
        id: 4,
        title: "University Management System",
        technologies: ["React JS", "Node JS", "MongoDB"],
        backgroundImage:
            "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
        frontImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVMAAACUCAMAAAAZDzr+AAACFlBMVEX///8QuvNJZYL7+/tRbInn5+ckNEWuUVn8/Pz3kiAAAAD39/cUHCAkMDwuPlLu7u7i5elBYIE8VWkAGzMAEi1geJMbLkBeboGyviQiMULCxckAt/NkbXpScpM4TmJgaHMIIjcnOE22ub3c3d5GsuCy4fdVW2JVZnmMnK4EGysAIj0YJTJKZHxvy/IkEgE1V3j3jAAACSAAAAqjLkz83ME9u6cXLUW0fYVCwfPe3t7RsLi8xdD++vMrMUPP0tatugD3pVMKJSlsfZDamkT7zaWZaLPKlpt7oLzMzMyv3dAAqYbo1dexWWKI1PeoP0m5xEGfYZ/w8tqeGkEvMzVTvqTF4tqypziAjJuaYWqbqbhtg5qwsLH9n0bc36rAeoLQ7/5WjLwAjuSioqOyi0qQuUuhHU2qRl2XACw2P0rk6cmyclNYX1rgw8fHzoP5uHyVpLRZsnPPoKV4foYxa5zP5aWPxTVmqd9KQ0Kuk4uCoUvCvLdkv/nI1uKMeG2MyfSuuskzebLd9f87oux8u/F6y7v2eQCLAADg0uaBOKH95tLAp8z5s3CjLDusgTbDzWfE27VsrzmNvWiYzImWzKdjw7a0kcjFsMiZzIi1ZniabbesoB7hqZDovqvPvNyzppwAmWykZQBtglcXe8AAiuugwtk+qfLfrGncz5/Qu3Wnn1OQVLGkknKf1re6jbGbACOrx3L5ypS7uFTVPxDuAAAejUlEQVR4nO2djX8Tx5nHN9pdvDDYIwHiZRO/7R5GxE5tCDVdS11zPnCWmDhnUp9OkjGg3gV8MdEBKeklLjIJrWtI4ZI0KUma5o4rlx5pU/of3jwzs7uzel3J67ji059labU7+/bVM+8zz0rS39RpwoVrz22m+qPSc0Vzq1mFVPH58cFN1d7otOfaVtMKpeLzPZurbVFqoH+reYWQTZAO9lB7Gh/fNjhIv7DXYPVijVU1d/A+ewYPNJZohY0D0vdtuwtbTay5nhsc3MfUWy68pOw7tA9ekelQM40Ii7v8LyMj4sehQ/1D14bgg1DdamJNpRFjmkrEYopy/fxbP5m7oeRSiVwilkolYgmFKplU2lOMSImxhbqBkuLFrKQTiZdKsYsXYznbTl68qCTT6VhyZYrs/sbbP327T1Gm9m7bo24Vq7BCzxOmpVIuH7sgvfUf0sHRdD6Xy5VyuXIqzciUjERbRF8qlXPlfSvZZK+RsuseIm8579hW3LFt1ZbM9OiKJF1/91GijHH+3RuJFWullMiZWeXQ0Ns/G3qNMt39V5/3A9N95XQ6H1s9f+P6zZuxcgqQllKpZI4ZaD7fDlIlVlbKUznyn8+X8qm6hppHOIM1jLGJJKlciqXKRmx1Fex0anVVSWG0T0nk8squodfeeK2TmE4xCDdu3Tq4SmMsKNUgwoaDyv8U/l4nVN5XMhFz0wn3I5Gg+yvKjqH+HX2dxHQElBhdXb2e+GvV6PhAD/noFKbbLlwExTtAuDDQMUzfu3nxfUmSVVFYrasGm5oq9L41L9foHKa3pPc0kamZNtScrdvkpdtqWrcN22NSJHmycOs0UNrWVTvtQGg9TRZsO56zTQOOQLYIQKdWsGrrZTi4Qw9u6XBwFjJu6CByOtXJq1qty+0gpjffD9qpSYo2ummTD1git2ua/jYzYGumSdjZpg6hIDSTo9pOnK9RA6ExPTjZQTg425ccgpySHiJumR3PFCRLMg4pFDbgRtTRTAenSBVw34gmyYEtGrspuXofObBOC37wvYJfxRPWOGAtaTXDdQ7T/IqdT8gV+H592ykUjGM/x0bBKAQaLmQkfJn5xUzBMIy1XyKjWCjEJ6+YJDj66rRuFJ0C7pq2yO6GeELvLOs/z5jkFLpjzX9fMgqOA7vo2D1JhzNNmvFkFdPT8xrCaP1NJEFcF7cEmOJpSAtQ/I6MZYS0c0sIyVi7PS+RL0iaWCYrkRjeZ5q5m9FkrGJLnr8tIRXJKjkScg2705mmcDzrMS3oUs2kzBdnWgiGQ1Sy3GRnj6l6VVItkmtZKvnB7mDVshBZVt043+lMaTXQZUpKhrgmVc1NHDlTGs6VLJ2ZpfpgRtZ8CcvuCV1Wy79ApkEivGM4Be2Xaw4pVOl6wTF4lHiqmJIPcluZY5XKePt4cV9IEQjTLqrZQCGo+rfxmMoq5GQa3VfCjLnm79HpTFOpVMmL+0Wd3KF0bKxSJ6UKO0UbY7o0mdELul0wirYufzVvFwpqQS86zlNip6VUKucx1Sir9bHtQRGmrrz0FGunuciqHzP9imQ2voRl94Tuwty9jEoLuwir0o/mWbEXYcs9SYczTaaFshRNT8MwhRj7MhfZ99XJ/aDJuZB26ur+HCL5k4VRcHWnM1ViCcVjaoSN+5VM97fH9D/vx20Dsqrg6o5nKuZRGs175n9UqXlvH87UioZpRq4ZstOZJsrlmF/mNynT71eqiqkjYflfuEgi7DENmZ42Uacz7c3EU34epcsqyS3mKwW1HLaPH/czkxzkBuxUmr//4UcL2+8eC67tdKaJdFoR66ZedqGppGpZ1UIUKdNzkx//EZiOjW1fD5ykw5kG8ihBsmMYumFUjvzw435NpsF6FIn18C9X1aOY7tybvPJrYApFiyfiSTqcaS/kUZVtfXQr+au+Oc6UpLvy41NMEqrJVJYmLp2lWvQOGTjcJ48/eXXy9keMaQBqpzONpUqxWnZaR0JZ6pTLtE7clybOvgg6e9w7oXiWNfKbfDr51se/WeCFYD/6dzrTxIq6JUzRgzufnXr8zv7TLtPtC/5JOp2pLE+1zpSkp+gfuUhZ6i//RPX5HNLmuDKy1pDpsS8eHP/k1Kkr9z9ymfqG2ulMlURCaJdqKr8NRb70ImF29sVLZN/X/5Xq7Iwm3ZtkOtfETk+MLXxx9dNPPrty32P6pneSTmcKo2dq5VG15cd9mRF78Sww5YuE6RVe9W/GdIxA3H73t1/emXOZ+pG/05kmbKWN9FQFO2W5+iVSEH2dL85IhKlvpw3yfY2104wtnJQ9ptu9k3Q40zxKZ1tnasgqnuBCGLmLKkZL55jmEJ7ha5fdjiaBacZt+xLbwLyTdDbTfWVst8FUqG+5LS/uolS/V0qM+9ur9dTE/VgiEWs9j6JyitA4D0vYKRb1osHalIvFQkGHBbVoGMVC0Z+EE8ijqpA+RXmU0l4exZaRzC0UCf3OsuYGkqE25h86UJaqbPh+ispS+XS5rbjf1gnFs9SP+h3PtISRsSVMKw31aaqbSlIb9ag2Txg4y5MAVKHPq+OZQnK6NUwDUEWknc8UZiS0l0e1fsKKs6wvjFGsY2MnnqY26X1l29ZHt8ZOidafnNi+cOLJenBtpzMtlcu5LYr79U/S4UxX4kjdOjutc5LOZjpFZyD9lTHt9HHStB4lS5ocTgg1D9Ng75DBal4uMLW/Y0Qti42XSmXpeKmQM5fwRuZH1RQKFyyudRBTSaL5Ply3ZdqqTT7Im2Wp5IsFq2xTNS3bJGso1Lp3bcLeFtub7AxLJqxQrfqkdB0OCDN7TBLegj11K27DpCFyHPoJW1T1nSdPftcxTPPZZNK1U11Pqzk7Z6TJQtpM53SyZOu6ods5W0+XmzAloWFvOnUsbaVh55xahg+z/j5pckCr7NgGCUjOBIeAQdMG+U5OqZfZ6VX1xImFn453ClPoO4kJcR9zmyMvq4qFbkcf9+sdMGDd1sKTuc6xU8K0F+pRwRsq62UdLMwIrjbSOGwBIfRFhCtInLh74puOsdPeuBEL5lFYnQErsaz4Cvm0wFxdW8K4KVN0d90he9x64ZZD0lPLspqF95neWUOQfKs4c2+OJODYNon45vWTJzvHTpNyVd+J+u2MQ2QdfIQcB+aHCPOUm5ZPMz9fx2TnW8/eIvuqluM0+REEpo/XVBUmoziZyTmyoNq6Q/Inb3PnlE97EfbnSJhNr5kxxQ5uFjD0RSB/yevIytTo09I6hyn4PPGY6o6ENT4Yr1JsH860oCJvuNnB1uSPUWMX4TH9at7WC1bBgPknH76lFgqqUSjqjpt4dBDTXiXY1tfEAP1+U8+Snm1Jz1RehMf09rxE55/I2JLuL0HSDfNRVPfKOohprFQOzDcNxVRWhYj67DMtqfIiPKZfZCzHRo7tWBhNLJNEWYZE3Zvu2kFME0iYb4rpXJ4ZVzX2YUzVouVX/FtkqgUTE4+p9l/r4E/BgWxROjONdLps624m1UFM83HbT08dA+by8Nmjsx8gIWGtnMsTvZ1yyDBHEuHqpqkOYgpjJhLB9HSxi091rDGghJkX9OxHzpTrBy+oJmRUesWG75ppHErHphWv7fSinoBpNgWSCSIuwnT6ONNijaY5FuWRbiHgG2Xcd3XwoEQyKg1VOu/5bpmi/t3jVAMDz7eknsG+4l5wsyms271nz4DrP5Ms19HA7j2X3cl3EdtpXRkDBwYMu7HMjTSZi+o/0K7L13FDujbYpg/YA3sKm8R0ZuLq8tWZygRV7+7uHt5z5MiRw0EdCSobCVJ7oF2kg8ROBaSD25r4gA1o27bdLMFolWnQUUIV02WSRXZNkyxyOrDl2pHhvl3Z/87vGgK2Vbq8qw/UPXwkEme++t6enl1EfaN9u1rTc/39h/xvfS1p6IDbohGpnaIHs5A9TtM8ctlfXzwylFUuzP1E7i0Od3e/5CtJdGh4eIh7wOwbjsRS9fGebamYErtx+kaL7iDBn2P9jSkmGqQXqlvXFSWp5Mk5ht4YUbJ7tw3okTPFvMgx3RWEio705XLKS7eu3bpeOtzdLRjPZfL7biN26t5I3/DlaJgeKOWV1cxPpOvpfC6fYxiSqRBUqbvMbDJZ7aU0YdM8XkOSrqwUHz0sSaVHq+mVqbIROzT0s7cpU4NOQY8y7p8JMO2adasdxmEllVKuv3LzZizfP1wd97v3udedjIxpOZe8cL73/IVcrlRO5VKp0ExJ2FSZYC1XMo3ZloVIZVHCuWQ8t7qai+ceXl/BU4m0MvT2G6/FXKYtp6d121CIrs4GmXad4RsKw8lYTElcuAkeRT0/rUQjo6OjidFRxffseflIBHk/t9PEzfM3E/Q8ee6UNQRTdnnkvdpBcTKVgsJrNpmA6T5KDBxPMy+vI98bGt6UuC+7SD2mbuwvDF94+PBhOR1CQ0c3jpSlp4lepfdCb/K70aFdyeRmMF2uYtrF56wUd7538d2L4FyEd0Vg1pGFhR4IvtB/tKWKT12m3Tcu/s8t7jmrprQG28IGDJ7V2g1xP9p6lEfSZ8rrx8WdD2/KN12mpmHD0DlwFaozd6A4pUbN9MDvpRvej6jbnqtN3V3j/pxsg+tW02T/pudS07Ax7Wv3XW+afME000Go5u7o7XSxBlPsMn1046LsMrUtehdwI7x71RSYbhwpY/r+RcRPaLk44Lz8hKbL1KIOXE0fGfNd6jIlAQWabMli3yxz85k+8Jh6dGdVznT14cWHcQnXjUXuFjkaO93b88OXHj5c8eM+jEui/vNqxG0YtIR4Wwgs1Q7mrRa3VzHdUL5foyzl22lXhZ1mh/eRLF71m8/myXWtZ7C/t9c4GBXTbansqO2f8LRqxdfXmYdBfuXu51VijWtrlq0uLZkWPo3BkpdVy9KCAU9qlqmi+XnVxJZlsZXBCvhm2OnVaqZdbMu1YWUlnoj71/CyWTDuHtONott8JUfLdLxnr40VgeltEqGPnYxbfieyx/QBtswv11TLXDoXN/GPyDd15iqJ826DMA+4gGCM1PxpwpSkB98V05nZKqTTbMu14Vg6PkqZYnpTYC0Z8YooU1gblZ2O23HGVDV8F5Ag9wtcuOPHN+pgOHAQvo0znUAWsU8VEYtWMXnRbdVMo873vWqUH/Vn4Jo0sNNSLkaZmg702Er830tF6PEcEjQqOx3MJhKUqYZqz/ZEkth/PvEBdI24jnVEVpzpA8xy1S/XTFhwqsJFaKfiYZcrDRWKp+jme48OdSdjCTfuk2vMCOJ34W6KjGkum6RMEfkRpbsnPC3wM1JUPtNZP6UK+iziTM9l6Bg0kqCaMECnnp0W6MMI/q418ScY1HYA7nYxuIJwK+/duHGoG+r7lKkKxij4vdsu+XYaKdNSMs+YWuR3P+HPOxoTmDpIpg64kLb8byCJOypye/IEpvfmSNmJvE6ftmDAFGvTq2J6YJRWsP1q7gi8RtjLXaxcFRttpKrHcoBI7bmbMM0nKVOkEqbibDVJjPtoPiqm42WbpacyDDGow5TAo/71TkvnJvfvn5ys8FouCUyp7sueidZhOtIrKraJIkxzNktPEWSZAaaSx1RG8y8PRWWnKZ6eYocc+3//wVfGz6OkANP9+5sx/Q2C6oNPsgnTzURKmHrpqaXXt1MpSqbZPGNKi76/FrwXckbwYSL534m+mudMXYfPspB7aqj+eRoz9Rvg+uAhf7siZ6rEGFMNbkZ0esmvDi5PjZDpuFc+JSkKOi0IIzftJjmsxj2VhLNTaf7+128K3gkbMvVvn3du9UXMVEnZrHxKbEOTRKeXAlMLLU2+ERXTXJnbqUsI/OYLENgoJ22SedQJxXTu1dsf/mFsbMHzz92IqX/3fW6PYaSWSpimTV6WUsFlMub1e+z69edxPzqmXnrqCjuO7QgDDACVjeT/Ay1pbtznwssgMd8nWvt08uOP/jDmZ3MNmIoN7343bMRMkylup9wIsKPapl9xYfUoynTjSFl6qgSZVgqxs4Lbwsdrrp26WgafRd9WMD31+Ot7HwNTz/9DPaZK4O43i2lSUcT6PrRsmqZTwdRG1jeR5VEldbQpU/JGXUGuVcR9aRl8a50NMp345NRnr/6RMh3jaWptpkrF3Q9uBlOF2KmSHG00jpPH/bXHkeVRadzcTkl1gPrXW5O+pt71JHkJNMeZUpoe0y8W/3Rq4i3KdPsJftWBIzKmIlHW7+8PVGltvEBjdQ9fyxauGXrlwDRfkTP16vv1xMunlwi8S8vSBPWuJ0n7WTGghp1mxra/OfHZ0tdjQsWhmqmYDe3q3qh2NtSOozuo6o1Ck1mRYO1UdGX+EOkp2U6dvRGm1OWbwBT8wgWYro9tJ1TXjoVnuslIPXXXuUPKFKHlS1H1m47beqwpU1J0pe0SM2iZfiJ0BbSEZthXCCcwpS41RI86m8p0OCTSnTvqJKo87i+fja7Mbyeb26l7Ls1rombXJ+wXYFrRaBCG6VB7uvyaKE7vtZ2wzP+9DQ2ZqvLyt1HZabj0lHwUdAMamZyCU4A5Mo4Bw+Wx4Rj8eWReHhXwU8SvOnDEWkyHs6n8dfnP51OpXL4Mg2FiucYjNlKpfCpJXoFRHGU640TS8iv6o1WkP7oeL6fKCownurajCVMbqzORpae5ZPO4H0Ye07uCmXI/emGYZvOJmzdvJNnjimN0hEsj5ZPJfCyZrFiZLpfLuXRWSSYTsWz+eqKUTySV14Z2Kruaxn05uvbTcVvORst0vbq9sJppn9DySZmmrl/vTb2U2hRdI69mdkqkRlc+lULF/aby61GeQy3Pm1aNdn6/hV49DExvvPv+eYl9dwfh0GE38Ohy7K3HqrhZ5Rss5I3V8aeZ48CoAj0E0+j7o+qpdabSm9yTruc3v1Yfn7/jEcb00UGJDxXhAy+4QwR3JIxNB2340t0BGyYMgaHP7uWDNUw6ukMXERrhmIa810ai6WkqRL4fQmJb37GFMVKa8hv7QjAlcb8kyawxFqZU0d5i1jiL+AfSwK8n2SJD4yN8Yf2f/NRaBrrNkEb+5KqzfqdMx410KnKmtHdS+BaCaXalXHLDzc875l3Vm+bEPyYmbOdO3LbPLdnmbdUxrWnLnaVL91s/GXds9TZ2yDbakS9G5JBMI0pP9XhuE5gGFYZpOUWZ6oEecY1fgTcfd3l5eaJ64iXdeBw7lmPiO5ZpO3T8SxtM699CaG1SelqlMEyTyRztLyaR+6SrY/4V8KPD5EvuYF5ARo9/jOZUaMUbqrF1TGmbdIOHWkfy5OzAKLXaTHO5Eme67nXAs+ItorOpoTtnnj4S8RtJ7AzzmF4hLOMwkAvchsjtMY2qfCqR8imUQqgbKBMW4B9GPpheoSUgi24w6Yu/VUrH8KhcOBD4mQJfPvBAQoue4dg7z9e0U4XaqYP8Ai4vOLBWHNZv++rk/sl7fD+BirvwG+T4Lj+2jmkuH6NM6QNtdf5uO+CcKa3XZGrosFHXTfg0SZXVrg6CYUQyHEFP22kTHPnYugEPzY2fXPiiNlMW9xESHkB3mgZgdgodt6fpI2eusDFashS00yptYXoaS9iSB4MPw/Xh2FFEfVFPnlTYKWZM0yzfh2TCe/AcphkWs1PWuMiZViDzmC798cMFrwxXxVStPzqeDpKN0E4Fplils6R9pu4I0kplMiQbOI80ufFvjzAxPFma0/yhvesnKuxUp/Uo8tPmhGnrtul5M2H5PqJ9jIwpH1yAZ2Zmlt26OtWnkx9/uN1NhquZ1vNU5449j6xuaqrC+NPFGUd3Dr7iOIbutorXZvrmSdtQnzUN0zEqZ3ZTcaZf3lFJlDf3z0Fq4rBBfpX5fnaYMs0nc3XiMLPTx49PPf4SmE5yO6UdjN/yJnOqO49/9+eP/DpxJdOjubROky3TIEmXTZIj+BSYRlbmt/EUH9fnXoYW+LVYm3SrR+ZM43QIupYhhip7owYqmPZ0i3G/hsjJNfrMqVOfSn/5/PPPr0gZeMwU7bg5S+MJ2y+z+KfHVz72226q7NSGYXGQFZOYSL2CwQphjkTk/VHYQuJjBr1h86yPD9PvB19oLCHXYG3nL2OD5E16/EOSMBsGN9QgU3ucMU0kGtspMcpLE/RxU4vsCT6U6SXBTk+Onfjik6XtXn9tFVPefqDndINP5AGSWdVPTzeONDheqtEd8fdXmngr8vfi4ydVNqlDmkEwuoVbe5Dpc4OMablR3Cc7v/j66y9OSA9ef/3149KVV4m0ZVgl2OmbY/AAJL9BrA5TUDyQnroBI4v7aT5eCloeNPbLVd6RVMDMTl9pPLD5WX82KGOa+VUcCluOOovJp17LTu3n3bifaxT3ZdqUAkUtGRFYcRj/jiA9oSHYfrSNcayBndIbmyUpvPXCQcgy+I1GPO8E6vtpNmYCkZo2piPLz0iVcV/27LQxU//IPD2l6dotCatigiwy1Xp6erp39caaxn0JWeCATyZ1CAQJFSxDuYSdjb77jeF10lPqVVGu3ESvleYmm9B+SsjRkeUPqu7IRG0yBd16BnsmSiUy7R8kTHt7e/uyK3YDO20ivp87IpkXpoJM+4d22CbSamQZcK2yLkeZnlYxPRMIQ/MoDL745OZx3xuJLvp0ryTlM8WHYDwPMO3JllIbZprhMf8E+1rBtJ/E/ZqH8pw0RRf3V7Le+FN8BrTozsZlebfkv7dlp5KkLi+L7XOcqWxnx+kQqe6eWB8pn+Ybx/1G8vZ7Ag+QdntsaqSndZnKjhYd08FcijNtMJengFH4PEooS1GpD2a7Fme7fA8ltI9vV8/4OB90xvIo29ywnYKEtvDq9NQkJZDF6enp4xOBvWluEmHdtKr9FOuOYQhObTdqpzDD7sxiV9fsVXcNYbpNdKPEmIKd1r6llpgKqq7vk+yNTvibnZa0yt+fvEc3lydVMVay4rgbzKNoEg1MfQ8lwLSnmikpn9ZpfG2liUYM7E98lnU37rNJlNPiHQp5VFTpaa55H5+D2iufSnzC8plFYVJtHabldAkG24K3AlunPZ/UcYFd1dqo0w00WKAJjaqMYbtue4Gg4TJ+7O6PjzRmqllRtkulbSVE30m7dspLEpSp66GExv1xX37d1McmeAYwNtCwyHXyyTdHCVPkIM1lKsxcjT7uh+mPMlqpRwXyqGWBqWsdhOneawVPRdYuVc6XeNxXlx3HPGjajsOjcNU1rR8zzfPnoU2yahNvD0OmqZ6bs+FREuRr5iRlCqkB804A8xC91ke4VlyIMO4PZpPNmSKtXTtl8+o5U+71paJdSuJ90XoJknKCAM3ISDsve64UkDtL3BNk7nWe1EP3wWsIq3huzv9FAuNQsGM6FeP5NTXCMj+pmzZPT1W5XabMO8kZ5lqDVyZq9/HxuqmKqmwF2lAY31d+UE8HxcuVbmOY9Bp/i35QeIG+E+hZFUb+yGx4RpT5fjnEmN6Qcb+yra/C/wOv9DbsNyUxQhOc+/IrUFl3Q93zPwtM3cEAkvRbSyeWqC6qJLNzqplWiJZPC1G29aViYfr327XTwLR6mp6a6TpMsyXeb3r1g9nZDwQnhsgbS9yYqX+hUO4/j1THf3RF0z4+HGl6GoJpS3lUoCyFBaYs3y8lG8Z98g9u4maDTDFt/WjIlEcQL0ofvIWF5jDKtE7lQcj3W4FXR3SuOW4e93H79ajjAacvt95/f6VcZ7xUmtqphbWJRaIZiWbMvN+UP0c6rJ1SYbGVoZmdysUoy/w5ndSjGhyL5vstM/X6tJBnqFCP+v3Fizcbj+3hl0JK/6LnIJVYXGt2ihZnZxdnu1yqIeN+OGwNBXF/KhYzmLuy2oINBYd1+/++iXMNPnIU9vKON/HPXMfJocoPV3O2MVCLaaDfFGbYehYHcR+3aKeIlt38NKQpUxRhvt8zOCjWaRrrh7Uk+BLdXUOe2+698KW7e2D3wLaa4/oa9ZuiMExFO13kTLtmUSimWjHCuulG1YJrbkEN4n5NprjFuM9SHMp0IhRTSY4q7jtgp/w1OFi1OBhc9FYNbqOvwRZdcwsaIFVBtwjKmWYbMdXk1uL+sse063goppoFcb/eTL9wSlEnOLtG2hD1Y5rPwzuflzTSooNvQVMe01SpQdzn1Z4QTGWBaZfPtNkcCVrmH7q8EaS50XZocqYXCM+A250NMO3RXaZKLFfnYjXv7ZU6SJ955mBwF6FYDHE/vlJoOq6P1N0Ob8iZfDbWPtORDSCsUp/BmHZ3X75cw3d+QDt27PhePe0I6ujfe9oJX4/uaDDnjNZSVEm6dtSpHSCc0qPMG9aI7xXLXWy2KkKgRD2mJB8JN1c37FTd+nN41dqPYUYkaUeG2X9kaCNIiaG2meO3l83X04E98JSBy8PfCdKdOysfxiHqMPnTN8ZUKo639tAYUN3nwrSrITog0zy8+3BT7di4uD9+ksR0C5+wOHz58lD/c2YzZk21oaeMRyR+KbKjN5PBOwWMtqXXSU3/pr/pqdP/A9jjcrug0LksAAAAAElFTkSuQmCC",
    },
    {
        id: 5,
        title: "Flexing Frog",
        technologies: ["React Native", "Node JS", "Android + IOS"],
        backgroundImage:
            "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
        frontImage: "https://play-lh.googleusercontent.com/b80P3EBuVDNsB3TI-6dZthOy5GvObIYwnb6NK31I5pxpkJuMHwss62q_docYNc6xz0Q=w240-h480-rw",
    },
    {
        id: 6,
        title: "Automatice message sender",
        technologies: ["React Native", "Node JS", "Android + IOS"],
        backgroundImage:
            "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
        frontImage: "https://play-lh.googleusercontent.com/oQlXDCd4UlGIragA2yZP27ElRyEf-rJlxEkIfybV3hrj7F95I5sfCNn20B_RBPxF93w=w2560-h1440-rw",
    },
];

const experienceList = [
    {
        id: 0,
        company: "Code Hub",
        links: {
            website: "https://www.codehub.tn",
            facebook: "https://www.facebook.com/codehubtn/",
            instagram: "https://www.instagram.com/codehub.coworking/",
        },
    },
    {
        id: 1,
        company: "vapoter.tn",
        links: {
            instagram: "https://www.instagram.com/vapoter.tn/",
        },
    },
];

export { skillsList, projectList, experienceList };
