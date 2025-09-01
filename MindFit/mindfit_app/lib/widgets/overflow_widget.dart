import 'package:flutter/material.dart';

class Overflow extends StatelessWidget {
  final double? largura;
  final double? altura;
  final Alignment? alignment;
  final Widget widget;

  const Overflow({super.key, this.largura, this.altura, required this.widget, this.alignment});

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      child: Container(
        height: altura,
        width: largura,
        child: ClipRect(
          child: Container(
            alignment: alignment,
            child: widget,
          ),
        ),
      ),
    );
  }
}
