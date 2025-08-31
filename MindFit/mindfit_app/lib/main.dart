import 'package:flutter/material.dart';
import 'package:mindfit_app/pages/index.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return Directionality(
      textDirection: TextDirection.ltr,
      child: InitApp(),
      // child: Teste(),
    );
  }
}

class Teste extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      child: Container(
        height: 200,
        width: 200,
        color: Colors.blue,
        child: ClipRect(
          child: Container(
            alignment: Alignment.center,
            child: Container(
              height: 100,
              width: 100,
              color: Colors.red,
            )
          ),
        ),
      )
    );
  }
}
